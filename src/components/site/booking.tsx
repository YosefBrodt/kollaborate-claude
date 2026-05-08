"use client";

import { useEffect, useRef, useState } from "react";
import { GbpAudit } from "@/components/site/gbp-audit";

const MAILTO =
  "mailto:joseph@kollaborate.ca?subject=Kollaborate%20demo%20request";

const DEFAULT_BOOKING_URL =
  "https://calendly.com/joseph-kollaborate/kollaborate-discovery-call";

type Provider = "cal" | "calendly" | "none";

function detectProvider(url: string | undefined): Provider {
  if (!url) return "none";
  if (url.includes("cal.com")) return "cal";
  if (url.includes("calendly.com")) return "calendly";
  return "none";
}

function withCalendlyTheme(baseUrl: string): string {
  const params = new URLSearchParams({
    hide_event_type_details: "1",
    hide_gdpr_banner: "1",
    primary_color: "224538",
    text_color: "0F0F0F",
    background_color: "FDFBF4",
  });
  const sep = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${sep}${params.toString()}`;
}

export function Booking() {
  const rawUrl = process.env.NEXT_PUBLIC_BOOKING_URL || DEFAULT_BOOKING_URL;
  const provider = detectProvider(rawUrl);
  const url = provider === "calendly" ? withCalendlyTheme(rawUrl) : rawUrl;
  const [widgetState, setWidgetState] = useState<"loading" | "loaded" | "failed">(
    "loading"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (provider !== "calendly" || !url) return;
    const w = window as unknown as { Calendly?: unknown };
    if (!w.Calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    function onMessage(e: MessageEvent) {
      if (typeof e.origin !== "string" || !e.origin.includes("calendly.com"))
        return;
      const data = e.data as { event?: string } | undefined;
      if (data?.event && data.event.indexOf("calendly.") === 0) {
        setWidgetState("loaded");
      }
    }
    window.addEventListener("message", onMessage);

    const failTimer = window.setTimeout(() => {
      setWidgetState((prev) => (prev === "loaded" ? prev : "failed"));
    }, 6000);

    return () => {
      window.removeEventListener("message", onMessage);
      window.clearTimeout(failTimer);
    };
  }, [provider, url]);

  return (
    <section
      id="book"
      className="bg-[var(--bg)] py-20 sm:py-24 border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--accent)]" />
              <span className="font-mono text-[15px] tracking-[0.2em] font-bold text-[var(--accent)]">
                BOOK A 15-MIN CALL
              </span>
            </div>
            <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px] lg:text-[52px] max-w-[480px] text-[var(--text)]">
              One call.
              <span className="block mt-2 font-serif italic font-medium text-[var(--accent)] tracking-[-0.015em]">
                One yes or no.
              </span>
            </h2>
            <p className="mt-7 text-[18px] sm:text-[19px] leading-[1.6] text-[var(--muted)] max-w-[460px]">
              We pull your numbers live on the call: missed-call rate, GBP
              signal, current site speed. If we cannot beat what you have, we
              tell you on the call.
            </p>

            <ul className="mt-9 space-y-4 max-w-[440px]">
              {[
                "No deck. No pitch.",
                "Real numbers from your business.",
                "Direct line to the founder, not a BDR.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[16px] sm:text-[17px] leading-[1.55] text-[var(--text)]"
                >
                  <BookingCheck />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-9 text-[14px] text-[var(--muted)]">
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
                  {widgetState === "loading" && <BookingSkeleton />}
                  <iframe
                    title="Book a 15-minute call with Joseph"
                    src={url}
                    onLoad={() => setWidgetState("loaded")}
                    className="block w-full"
                    style={{ height: 720, border: 0 }}
                    loading="lazy"
                    allow="camera; microphone; fullscreen; payment"
                  />
                </>
              )}

              {provider === "calendly" && url && (
                <>
                  {widgetState === "loading" && <BookingSkeleton />}
                  {widgetState === "failed" && <BookingFallback />}
                  {widgetState !== "failed" && (
                    <div
                      className={`calendly-inline-widget transition-opacity duration-300 ${
                        widgetState === "loaded" ? "opacity-100" : "opacity-0"
                      }`}
                      data-url={url}
                      style={{ minWidth: 320, height: 720 }}
                    />
                  )}
                </>
              )}

              {provider === "none" && <BookingFallback />}
            </div>
          </div>
        </div>

        <details className="group mt-20 sm:mt-24 border-t border-[var(--border)] pt-12">
          <summary className="cursor-pointer list-none flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 group-open:mb-10">
            <div>
              <span className="font-mono text-[12px] tracking-[0.18em] font-bold text-[var(--accent)]">
                NOT READY TO TALK YET?
              </span>
              <h3 className="mt-3 font-display font-semibold tracking-[-0.02em] leading-[1.15] text-[26px] sm:text-[32px] max-w-[640px] text-[var(--text)]">
                Get a free Google + AI search audit instead.
              </h3>
              <p className="mt-3 max-w-[560px] text-[16px] leading-[1.6] text-[var(--muted)]">
                One-page report in your inbox within 24 hours. No sales sequence.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-[14px] font-semibold text-[var(--accent)]">
              <span className="group-open:hidden">Show the audit form</span>
              <span className="hidden group-open:inline">Hide</span>
              <span aria-hidden className="transition-transform group-open:rotate-180">↓</span>
            </span>
          </summary>
          <GbpAudit embedded />
        </details>
      </div>
    </section>
  );
}

function BookingCheck() {
  return (
    <span
      aria-hidden
      className="mt-[3px] grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[var(--accent-bright)]/40"
    >
      <svg
        viewBox="0 0 16 16"
        className="h-[12px] w-[12px] text-[var(--accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8.5l3.25 3.25L13 5" />
      </svg>
    </span>
  );
}

function BookingSkeleton() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="flex flex-col items-center gap-4 text-center px-6">
        <span className="inline-block h-8 w-8 rounded-full border-2 border-[var(--accent)]/20 border-t-[var(--accent)] animate-spin" />
        <span className="font-mono text-[12px] tracking-[0.14em] text-[var(--muted)] font-bold">
          LOADING CALENDAR
        </span>
      </div>
    </div>
  );
}

function BookingFallback() {
  return (
    <div className="p-10 sm:p-14 h-full min-h-[640px] flex flex-col justify-center">
      <span className="font-mono text-[12px] tracking-[0.16em] text-[var(--accent)] font-bold">
        DIRECT CONTACT
      </span>
      <h3 className="mt-5 font-display font-semibold tracking-[-0.02em] leading-[1.1] text-[28px] sm:text-[32px]">
        Email me to grab a slot.
      </h3>
      <p className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[var(--muted)] max-w-[460px]">
        Send a line with two or three windows that work for you. I confirm the
        same day with a Zoom link and a 15-minute hold.
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
