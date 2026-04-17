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
    <div className="relative h-full min-h-[260px] w-full rounded-2xl border border-[var(--border)] bg-white p-6 overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-wider text-[var(--muted)]">
          GOOGLE REVIEWS · LAST 30D
        </span>
        <span className="font-mono text-[11px] text-[var(--accent)] font-medium">
          +47
        </span>
      </div>
      <div className="mt-5 flex items-baseline gap-2">
        <span className="font-display text-[42px] font-medium tracking-[-0.03em]">
          4.9
        </span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              fill="#F5B800"
              className="h-4 w-4"
            >
              <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="mt-1 text-[12px] text-[var(--muted)]">
        Up from 4.3 · 82 reviews total
      </p>
      <div className="mt-5 space-y-1.5">
        {[
          { label: "5★", w: "92%", count: 43 },
          { label: "4★", w: "65%", count: 3 },
          { label: "3★", w: "10%", count: 1 },
          { label: "2★", w: "4%", count: 0 },
          { label: "1★", w: "2%", count: 0 },
        ].map((r) => (
          <div key={r.label} className="flex items-center gap-2 text-[11px]">
            <span className="font-mono text-[var(--muted)] w-6">{r.label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
              <div
                className="h-full bg-[var(--accent)] rounded-full"
                style={{ width: r.w }}
              />
            </div>
            <span className="font-mono text-[var(--muted)] w-6 text-right">
              {r.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SiteVisual() {
  return (
    <div className="relative h-full min-h-[260px] w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-cream)] p-5 overflow-hidden">
      <div className="rounded-xl bg-white shadow-[0_1px_0_var(--border)] border border-[var(--border)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)] bg-[var(--bg)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8B04B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4D0C5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D4D0C5]" />
          <span className="ml-3 font-mono text-[10px] text-[var(--muted)]">
            clientsite.ca
          </span>
        </div>
        <div className="p-5">
          <div className="font-display text-[17px] font-semibold tracking-[-0.02em] leading-tight">
            Ottawa&apos;s most booked HVAC team.
          </div>
          <div className="mt-1.5 text-[11px] text-[var(--muted)] leading-relaxed">
            24/7 service across the National Capital Region.
          </div>
          <div className="mt-3 inline-flex h-7 items-center rounded-md bg-[var(--accent)] px-3 text-[11px] font-medium text-white">
            Book a tech
          </div>
          <div className="mt-4 flex items-center gap-3 text-[10px] font-mono text-[var(--muted)]">
            <span>● 98 PERF</span>
            <span>● 100 A11Y</span>
            <span>● 100 SEO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentVisual() {
  const posts = [
    { day: "MON", title: "Spring tune-up checklist" },
    { day: "WED", title: "Before/after: Plateau restoration" },
    { day: "FRI", title: "Client win: 2-week turnaround" },
  ];
  return (
    <div className="relative h-full min-h-[260px] w-full rounded-2xl border border-[var(--border)] bg-white p-5 overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-wider text-[var(--muted)]">
          CONTENT CALENDAR · WEEK 14
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
            <div className="flex-1">
              <div className="text-[13px] font-medium leading-tight">
                {p.title}
              </div>
              <div className="mt-1 flex gap-1.5">
                <span className="inline-block h-1.5 w-6 rounded-full bg-[var(--accent)]/30" />
                <span className="inline-block h-1.5 w-4 rounded-full bg-[var(--accent)]/30" />
                <span className="inline-block h-1.5 w-5 rounded-full bg-[var(--accent)]/30" />
              </div>
            </div>
            <span className="text-[10px] font-mono text-[var(--muted)]">
              IG · FB · GMB
            </span>
          </div>
        ))}
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
