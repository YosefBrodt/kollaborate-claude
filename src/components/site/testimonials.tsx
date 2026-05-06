import { FadeUp } from "@/components/site/fade-up";

type Testimonial = {
  initial: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  // Specific Kollaborate services actually deployed for this client.
  // Keep these to things that were really built/delivered, no aspirational items.
  services: string[];
  // Optional path to a high-res screenshot of the live site, served from /public.
  // Drop file in /public/portfolio/<slug>.png and reference here.
  screenshot?: string;
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
    services: ["Website", "Review automation"],
    quote:
      "We used to forget to ask for reviews. Now they fire on their own after every table and we doubled our Google count in two months without lifting a finger.",
    avatarBg: "bg-[#f5b800]/25",
    avatarText: "text-[#8a6500]",
  },
  {
    initial: "R",
    name: "Roland",
    role: "Nonprofit director",
    location: "Montreal, QC",
    services: ["Website", "Google Business Profile"],
    quote:
      "We were invisible online. Joseph built us a site and Google profile that finally make us look like a real organization. Donor inquiries went up the first month.",
    avatarBg: "bg-[var(--accent-bright)]/30",
    avatarText: "text-[var(--accent)]",
  },
  {
    initial: "P",
    name: "Pierre",
    role: "Water delivery",
    location: "Eastern Ontario",
    services: ["Website", "Booking form"],
    quote:
      "Customers can finally book deliveries without calling. Cut my phone time in half and the site loads in under a second on the truck.",
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
            <span className="font-mono text-[15px] tracking-[0.2em] text-[var(--accent-bright)] font-bold">
              SITES I&apos;VE BUILT
            </span>
          </div>
          <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px] lg:text-[52px] max-w-[920px]">
            What owners say about the work.
          </h2>
          <p className="mt-6 max-w-[640px] text-[18px] sm:text-[19px] leading-[1.6] text-[var(--text-inverse)]/70">
            Three real deployments. Different service combos per client. Live
            walkthrough on the discovery call.
          </p>
        </FadeUp>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.08}>
              <article className="group h-full flex flex-col rounded-2xl border border-[var(--border-on-dark)] bg-white/[0.03] overflow-hidden transition-all duration-200 hover:border-[var(--accent-bright)]/40 hover:bg-white/[0.05]">
                {/* Optional site screenshot at top of card */}
                {t.screenshot ? (
                  <div className="relative aspect-[16/10] bg-[var(--bg-dark-2)] border-b border-[var(--border-on-dark)] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.screenshot}
                      alt={`Site Joseph built for ${t.name}`}
                      className="block h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--bg-dark-2)] via-[var(--bg-dark)] to-[var(--bg-dark-2)] border-b border-[var(--border-on-dark)] grid place-items-center">
                    <div className="text-center">
                      <div className="font-mono text-[10px] tracking-[0.18em] text-[var(--text-inverse)]/35 font-bold">
                        SCREENSHOT
                      </div>
                      <div className="mt-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-inverse)]/25">
                        {t.name.toUpperCase()} · COMING SOON
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-7 sm:p-8 flex-1 flex flex-col">
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
                  <blockquote className="mt-5 text-[16px] sm:text-[17px] leading-[1.55] text-[var(--text-inverse)]/95 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Identity row */}
                  <div className="mt-auto pt-6 border-t border-[var(--border-on-dark)] flex items-center gap-3">
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
