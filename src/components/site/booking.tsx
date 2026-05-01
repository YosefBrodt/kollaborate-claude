"use client";

import { useEffect, useRef, useState } from "react";

const MAILTO =
  "mailto:joseph@kollaborate.ca?subject=Kollaborate%20demo%20request";

const HOURS = [
  { day: "Mon to Thu", time: "6:00pm to 10:00pm" },
  { day: "Sunday", time: "10:00am to 10:00pm" },
  { day: "Fri and Sat", time: "Closed" },
];

type Provider = "cal" | "calendly" | "none";

function detectProvider(url: string | undefined): Provider {
  if (!url) return "none";
  if (url.includes("cal.com")) return "cal";
  if (url.includes("calendly.com")) return "calendly";
  return "none";
}

export function Booking() {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL;
  const provider = detectProvider(url);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (provider !== "calendly" || !url) return;
    const w = window as unknown as { Calendly?: unknown };
    if (w.Calendly) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      try {
        document.body.removeChild(script);
      } catch {
        /* already removed */
      }
    };
  }, [provider, url]);

  return (
    <section
      id="book"
      className="bg-[var(--bg)] py-24 sm:py-32 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--accent)]" />
              <span className="font-mono text-[13px] tracking-[0.18em] font-semibold text-[var(--accent)]">
                Book a 15-minute call
              </span>
            </div>
            <h2 className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[48px] max-w-[480px]">
              Pick a time.
              <span className="block mt-2 font-serif italic font-medium text-[var(--accent)]">
                I show up live.
              </span>
            </h2>
            <p className="mt-7 text-[17px] sm:text-[18px] leading-[1.6] text-[var(--muted)] max-w-[440px]">
              Fifteen minutes on Zoom. We run the voice agent against your
              actual intake questions live. If it is not the right fit, you
              walk. No pressure, no follow-up sequence.
            </p>

            <div className="mt-9 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <span className="font-mono text-[12px] tracking-[0.16em] text-[var(--muted)] font-semibold">
                AVAILABILITY
              </span>
              <ul className="mt-5 space-y-3.5">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <span className="text-[15px] sm:text-[16px] text-[var(--text)] font-medium">
                      {h.day}
                    </span>
                    <span
                      className={`font-mono text-[14px] tabular-nums ${
                        h.time === "Closed"
                          ? "text-[var(--muted)]/70"
                          : "text-[var(--accent)]"
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 pt-5 border-t border-[var(--border)] text-[13px] text-[var(--muted)] leading-[1.5] font-mono tracking-wide">
                EASTERN TIME · KOLLABORATE.CA · MTL
              </p>
            </div>

            <p className="mt-7 text-[14px] text-[var(--muted)]">
              Prefer email? Write me at{" "}
              <a
                href={MAILTO}
                className="text-[var(--accent)] underline underline-offset-4 decoration-2 hover:text-[var(--accent-hover)] font-medium"
              >
                joseph@kollaborate.ca
              </a>
              . Response inside 24 hours, usually same day.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-[0_20px_60px_-30px_rgba(20,40,30,0.25)]"
              style={{ minHeight: 720 }}
            >
              {provider === "cal" && url && (
                <>
                  {!iframeLoaded && <BookingSkeleton />}
                  <iframe
                    title="Book a 15-minute call with Joseph"
                    src={url}
                    onLoad={() => setIframeLoaded(true)}
                    className="block w-full"
                    style={{ height: 720, border: 0 }}
                    loading="lazy"
                    allow="camera; microphone; fullscreen; payment"
                  />
                </>
              )}

              {provider === "calendly" && url && (
                <div
                  className="calendly-inline-widget"
                  data-url={url}
                  style={{ minWidth: 320, height: 720 }}
                />
              )}

              {provider === "none" && <BookingFallback />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingSkeleton() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="flex flex-col items-center gap-4 text-center px-6">
        <span className="inline-block h-8 w-8 rounded-full border-2 border-[var(--accent)]/20 border-t-[var(--accent)] animate-spin" />
        <span className="font-mono text-[12px] tracking-[0.14em] text-[var(--muted)] font-semibold">
          LOADING CALENDAR
        </span>
      </div>
    </div>
  );
}

function BookingFallback() {
  return (
    <div className="p-10 sm:p-14 h-full min-h-[640px] flex flex-col justify-center">
      <span className="font-mono text-[12px] tracking-[0.16em] text-[var(--muted)] font-semibold">
        DIRECT CONTACT
      </span>
      <h3 className="mt-5 font-display font-semibold tracking-[-0.02em] leading-[1.1] text-[28px] sm:text-[32px]">
        Email me to grab a slot.
      </h3>
      <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[var(--muted)] max-w-[460px]">
        Send a line with two or three windows that work for you inside the
        availability shown. I confirm same day with a Zoom link and a
        15-minute hold.
      </p>
      <a
        href={MAILTO}
        className="mt-9 inline-flex h-14 w-fit items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 text-[16px] font-semibold text-[var(--text-inverse)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
      >
        Email joseph@kollaborate.ca →
      </a>
      <p className="mt-7 font-mono text-[12px] tracking-[0.14em] text-[var(--muted)]/70">
        REPLY INSIDE 24 HOURS · USUALLY SAME DAY
      </p>
    </div>
  );
}
