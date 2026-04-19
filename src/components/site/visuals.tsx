/* Inline illustrative visuals per service. CSS/SVG only, no external images. */

export function CallVisual() {
  return (
    <div className="relative h-full min-h-[260px] w-full rounded-2xl bg-[var(--bg-dark)] p-6 overflow-hidden">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div className="relative z-10 flex flex-col gap-3 text-[var(--text-inverse)]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent-bright)] animate-pulse" />
          <span className="font-mono text-[11px] tracking-wider text-[var(--accent-bright)]">
            LIVE CALL · 00:47
          </span>
        </div>
        <div className="mt-2 space-y-2.5 font-mono text-[12px] leading-relaxed">
          <div className="flex gap-2">
            <span className="text-[var(--muted-dark)] shrink-0">CALLER</span>
            <span className="text-[var(--text-inverse)]/90">
              Hi, do you have any openings this week?
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-[var(--accent-bright)] shrink-0">AGENT</span>
            <span className="text-[var(--text-inverse)]/90">
              We have Tuesday 2pm or Thursday 10am. Which works?
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-[var(--muted-dark)] shrink-0">CALLER</span>
            <span className="text-[var(--text-inverse)]/90">Thursday 10.</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[var(--accent-bright)] shrink-0">AGENT</span>
            <span className="text-[var(--text-inverse)]/90">
              Booked. You&apos;ll get a text confirmation.
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-end gap-0.5 h-8">
          {[3, 6, 4, 8, 5, 7, 3, 9, 4, 6, 5, 7, 4, 8, 3, 6, 5, 7, 4, 8].map(
            (h, i) => (
              <div
                key={i}
                style={{ height: `${h * 10}%` }}
                className="flex-1 rounded-sm bg-[var(--accent-bright)]/70"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export function ReviewVisual() {
  return (
    <div className="relative h-full min-h-[260px] w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-wider text-[var(--muted)]">
          GOOGLE REVIEWS · LAST 30D
        </span>
        <span className="font-mono text-[11px] text-[var(--accent)] font-medium">
          +47
        </span>
      </div>

      <div className="mt-3.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-wider text-[var(--muted)]">
            SMS · AUTO-SENT 2H AFTER JOB
          </span>
          <span className="font-mono text-[9px] text-[var(--muted)]">
            14:22
          </span>
        </div>
        <div className="mt-2 inline-block max-w-[92%] rounded-xl rounded-tl-sm bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-3 py-2 text-[11.5px] leading-[1.45] text-[var(--text,#1a1a1a)]">
          Hi Jamie, it&apos;s Mike from Golden Comfort. Hope the furnace is
          running smooth. If you&apos;ve got 30 seconds, mind leaving us a
          quick Google review?{" "}
          <span className="text-[var(--accent)] underline underline-offset-2">
            g.page/r/gc
          </span>
        </div>
      </div>

      <div className="mt-3.5 flex items-center justify-between border-t border-[var(--border)] pt-3">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-[30px] font-medium tracking-[-0.03em] leading-none">
            4.9
          </span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                fill="#F5B800"
                className="h-3.5 w-3.5"
              >
                <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
              </svg>
            ))}
          </div>
        </div>
        <span className="font-mono text-[10px] text-[var(--muted)] text-right leading-tight">
          up from 4.3
          <br />
          82 reviews total
        </span>
      </div>
    </div>
  );
}

export function SiteVisual() {
  return (
    <div className="relative h-full min-h-[260px] w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-cream)] p-4 overflow-hidden">
      <div className="rounded-xl bg-[var(--card)] shadow-[0_1px_0_var(--border)] border border-[var(--border)] overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)] bg-[var(--bg)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8B04B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4D0C5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4D0C5]" />
          <span className="ml-2 flex-1 rounded-md bg-[var(--card)] px-2 py-0.5 font-mono text-[9px] text-[var(--muted)] border border-[var(--border)]">
            goldencomforthvac.ca
          </span>
        </div>

        {/* Site nav */}
        <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-[var(--border)]">
          <span className="font-display text-[10.5px] font-semibold tracking-[-0.01em]">
            Golden Comfort
          </span>
          <div className="hidden sm:flex gap-3 font-mono text-[8px] tracking-wider text-[var(--muted)]">
            <span>SERVICES</span>
            <span>AREAS</span>
            <span>ABOUT</span>
          </div>
          <span className="inline-flex h-[18px] items-center rounded bg-[var(--accent)] px-1.5 text-[8px] font-medium text-white">
            BOOK
          </span>
        </div>

        {/* Hero */}
        <div className="px-3.5 py-3.5">
          <div className="font-mono text-[8px] tracking-wider text-[var(--accent)]">
            HVAC · OTTAWA
          </div>
          <div className="mt-1 font-display text-[15.5px] font-semibold tracking-[-0.02em] leading-[1.15]">
            Ottawa&apos;s most booked
            <br />
            HVAC team.
          </div>
          <div className="mt-1.5 text-[10px] text-[var(--muted)] leading-relaxed">
            Furnace, AC, and emergency service across the National Capital
            Region. Licensed, insured, 24/7.
          </div>
          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="inline-flex h-6 items-center rounded-md bg-[var(--accent)] px-2 text-[9.5px] font-medium text-white">
              Book a tech
            </span>
            <span className="inline-flex h-6 items-center rounded-md border border-[var(--border)] px-2 text-[9.5px] font-medium">
              Get a quote
            </span>
          </div>

          {/* Trust strip */}
          <div className="mt-3 flex items-center gap-2 pt-2 border-t border-[var(--border)]">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  viewBox="0 0 20 20"
                  fill="#F5B800"
                  className="h-2.5 w-2.5"
                >
                  <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                </svg>
              ))}
            </div>
            <span className="font-mono text-[8.5px] text-[var(--muted)]">
              4.9 · 482 reviews
            </span>
            <span className="ml-auto flex items-center gap-1.5 font-mono text-[8px] text-[var(--muted)]">
              <span>● 98 PERF</span>
              <span>● 100 A11Y</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentVisual() {
  const posts = [
    { day: "MON", title: "Spring tune-up: what to check", tag: "OFFER" },
    { day: "WED", title: "Before/after: Plateau furnace swap", tag: "UPDATE" },
    { day: "FRI", title: "Now booking summer AC installs", tag: "EVENT" },
  ];
  return (
    <div className="relative h-full min-h-[260px] w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-wider text-[var(--muted)]">
          GOOGLE BUSINESS · WEEK 14
        </span>
        <span className="font-mono text-[11px] text-[var(--accent)]">
          3 scheduled
        </span>
      </div>
      <div className="mt-4 space-y-2.5">
        {posts.map((p) => (
          <div
            key={p.day}
            className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5"
          >
            <span className="font-mono text-[10px] font-medium tracking-wider text-[var(--accent)] pt-0.5">
              {p.day}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium leading-tight truncate">
                {p.title}
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="inline-block h-4 w-5 rounded-sm bg-[var(--accent)]/25 border border-[var(--accent)]/20" />
                <span className="font-mono text-[9px] text-[var(--muted)]">
                  photo · 60 words
                </span>
              </div>
            </div>
            <span className="shrink-0 rounded-sm bg-[var(--accent)]/10 px-1.5 py-0.5 text-[9px] font-mono font-medium tracking-wider text-[var(--accent)]">
              {p.tag}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-[var(--border)] flex items-center justify-between font-mono text-[10px] text-[var(--muted)]">
        <span>Profile views</span>
        <span className="text-[var(--accent)] font-medium">+42% vs last mo</span>
      </div>
    </div>
  );
}

export function EmailVisual() {
  return (
    <div className="relative h-full min-h-[260px] w-full rounded-2xl bg-[var(--bg-dark)] p-6 overflow-hidden">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-wider text-[var(--accent-bright)]">
            LEAD INBOX · NEW
          </span>
          <span className="font-mono text-[11px] text-[var(--text-inverse)]/60">
            replied in 47s
          </span>
        </div>
        <div className="mt-4 rounded-xl border border-[var(--border-on-dark)] bg-white/[0.03] p-4">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[var(--accent-bright)] font-mono">
              ← INCOMING
            </span>
            <span className="text-[var(--text-inverse)]/50 font-mono">
              14:03
            </span>
          </div>
          <div className="mt-2 text-[12px] text-[var(--text-inverse)]/90 leading-relaxed">
            &quot;Need a quote for a roof inspection before end of month.&quot;
          </div>
          <div className="mt-1 text-[10px] text-[var(--text-inverse)]/50">
            sarah.m@gmail.com
          </div>
        </div>
        <div className="mt-2 rounded-xl border border-[var(--accent-bright)]/30 bg-[var(--accent-bright)]/[0.06] p-4">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[var(--accent-bright)] font-mono">
              → AUTO-REPLY
            </span>
            <span className="text-[var(--text-inverse)]/50 font-mono">
              14:04
            </span>
          </div>
          <div className="mt-2 text-[12px] text-[var(--text-inverse)]/90 leading-relaxed">
            Hi Sarah. Thanks for reaching out. I&apos;ve booked you into our
            inspection slot Wed 3pm. Calendar invite sent.
          </div>
        </div>
      </div>
    </div>
  );
}
