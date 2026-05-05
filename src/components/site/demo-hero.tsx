"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FadeUp } from "@/components/site/fade-up";

type Status = "idle" | "connecting" | "active" | "ended" | "unconfigured";

export function DemoHero() {
  const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
  const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;
  const configured = Boolean(publicKey && assistantId);

  const [status, setStatus] = useState<Status>(
    configured ? "idle" : "unconfigured"
  );
  const [seconds, setSeconds] = useState(0);
  const vapiRef = useRef<unknown>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!configured || !publicKey || !assistantId) return;
    let cancelled = false;
    (async () => {
      const { default: Vapi } = await import("@vapi-ai/web");
      if (cancelled) return;
      const vapi = new Vapi(publicKey);
      vapiRef.current = vapi;
      vapi.on("call-start", () => {
        setStatus("active");
        setSeconds(0);
        timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
      });
      vapi.on("call-end", () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setStatus("ended");
        setTimeout(() => setStatus("idle"), 2500);
      });
      vapi.on("error", () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setStatus("idle");
      });
    })();
    return () => {
      cancelled = true;
      if (timerRef.current) clearInterval(timerRef.current);
      const v = vapiRef.current as { stop?: () => void } | null;
      v?.stop?.();
    };
  }, [configured, publicKey, assistantId]);

  const start = async () => {
    const v = vapiRef.current as { start?: (id: string) => Promise<void> } | null;
    if (!v?.start || !assistantId) return;
    setStatus("connecting");
    try {
      await v.start(assistantId);
    } catch {
      setStatus("idle");
    }
  };

  const stop = () => {
    const v = vapiRef.current as { stop?: () => void } | null;
    v?.stop?.();
  };

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <section className="relative bg-[var(--bg-dark)] text-[var(--text-inverse)] py-20 sm:py-28 overflow-hidden border-b border-[var(--border-on-dark)]">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none ambient-drift"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 25%, rgba(168,213,187,0.18) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--accent-bright)]" />
              <span className="font-mono text-[14px] tracking-[0.2em] text-[var(--accent-bright)] font-semibold">
                STOP READING. TRY IT.
              </span>
            </div>
            <h2 className="mt-6 font-display font-semibold leading-[0.98] tracking-[-0.035em] text-[40px] sm:text-[56px] lg:text-[68px]">
              Talk to the receptionist.
              <span className="block mt-2 font-serif italic font-medium text-[var(--accent-bright)] tracking-[-0.01em]">
                Right now.
              </span>
            </h2>
            <p className="mt-7 max-w-[560px] text-[18px] sm:text-[20px] leading-[1.55] text-[var(--text-inverse)]/80">
              Same voice agent that picks up your customers. Thirty seconds in
              your browser. No signup, no follow-up sequence. Don&apos;t take
              my word for it, take the call.
            </p>

            <div className="mt-10">
              <DemoCTA
                configured={configured}
                status={status}
                seconds={seconds}
                fmt={fmt}
                onStart={start}
                onStop={stop}
              />
            </div>

            <p className="mt-6 font-mono text-[12px] tracking-[0.14em] text-[var(--text-inverse)]/50">
              OR SCROLL FOR THE PITCH ↓
            </p>
          </FadeUp>

          <FadeUp className="lg:col-span-5" delay={0.1}>
            <PhoneTeaser status={status} seconds={seconds} fmt={fmt} />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function DemoCTA({
  configured,
  status,
  seconds,
  fmt,
  onStart,
  onStop,
}: {
  configured: boolean;
  status: Status;
  seconds: number;
  fmt: (s: number) => string;
  onStart: () => void;
  onStop: () => void;
}) {
  if (!configured) {
    return (
      <Link
        href="#book"
        className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[var(--accent-bright)] px-9 text-[17px] font-semibold text-[var(--bg-dark)] shadow-[0_12px_44px_-12px_rgba(168,213,187,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
      >
        Hear it on the call →
      </Link>
    );
  }

  if (status === "active") {
    return (
      <button
        type="button"
        onClick={onStop}
        className="group inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-red-400/60 bg-red-500/15 px-8 text-[17px] font-semibold text-[var(--text-inverse)] transition-all hover:bg-red-500/25"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400" />
        </span>
        On call · <span className="font-mono tabular-nums">{fmt(seconds)}</span>
        <span className="ml-1.5 inline-block">· End call</span>
      </button>
    );
  }

  if (status === "connecting") {
    return (
      <div className="inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-[var(--accent-bright)]/60 bg-[var(--accent-bright)]/10 px-8 text-[17px] font-semibold text-[var(--text-inverse)]">
        <span className="inline-block h-3 w-3 rounded-full bg-[var(--accent-bright)] animate-pulse" />
        Connecting...
      </div>
    );
  }

  if (status === "ended") {
    return (
      <div className="inline-flex h-16 items-center justify-center gap-3 rounded-full border-2 border-[var(--accent-bright)]/60 bg-[var(--accent-bright)]/10 px-8 text-[17px] font-semibold text-[var(--text-inverse)]">
        Thanks for trying.
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onStart}
      className="group relative inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[var(--accent-bright)] px-9 text-[18px] font-semibold text-[var(--bg-dark)] animate-breathe-pulse transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--bg-dark)] opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--bg-dark)]" />
      </span>
      Start the demo
      <span aria-hidden className="text-[20px] transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </button>
  );
}

function PhoneTeaser({
  status,
  seconds,
  fmt,
}: {
  status: Status;
  seconds: number;
  fmt: (s: number) => string;
}) {
  const stateLabel =
    status === "active"
      ? "LIVE"
      : status === "connecting"
      ? "DIALING"
      : status === "ended"
      ? "ENDED"
      : "READY";
  const timeDisplay = status === "active" ? fmt(seconds) : "00:00";

  return (
    <div className="relative mx-auto max-w-[340px] sm:max-w-[360px]">
      {/* Ambient halo behind phone */}
      <div
        aria-hidden
        className="absolute inset-0 -m-8 blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(168,213,187,0.45), transparent 65%)",
        }}
      />
      <div className="relative aspect-[9/19] rounded-[44px] bg-[#0c0c0e] border border-[#1a1f1c] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden p-3">
        <div className="relative h-full w-full rounded-[34px] bg-gradient-to-b from-[#0d1f1a] to-[#091713] overflow-hidden">
          {/* Status bar */}
          <div className="px-6 pt-3 flex justify-between items-center text-[10px] font-mono text-[var(--text-inverse)]/65 tabular-nums">
            <span>9:41</span>
            <span>5G</span>
          </div>

          {/* Header */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-[12px] font-mono tracking-[0.18em] text-[var(--accent-bright)]/85 font-semibold">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)] animate-beacon-pulse" />
              KOLLABORATE · {stateLabel}
            </div>
            <div className="mt-3 font-display text-[28px] font-semibold tracking-[-0.02em] text-[var(--text-inverse)]">
              AI Receptionist
            </div>
            <div className="mt-1 text-[13px] font-mono text-[var(--text-inverse)]/55 tabular-nums">
              {timeDisplay}
            </div>
          </div>

          {/* Mic indicator */}
          <div className="mt-9 flex justify-center">
            <div className="relative h-28 w-28 rounded-full bg-[var(--accent-bright)]/20 border border-[var(--accent-bright)]/40 grid place-items-center">
              <div className="h-20 w-20 rounded-full bg-[var(--accent-bright)]/40 grid place-items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-9 w-9 text-[var(--accent-bright)]"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM5 11a1 1 0 0 0-2 0 9 9 0 0 0 8 8.94V22h-3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.06A9 9 0 0 0 21 11a1 1 0 0 0-2 0 7 7 0 1 1-14 0z" />
                </svg>
              </div>
              <span className="absolute inset-0 rounded-full border-2 border-[var(--accent-bright)]/30 animate-ping" />
            </div>
          </div>

          {/* Animated voice waveform — always moving */}
          <div className="absolute inset-x-0 bottom-12 px-7 flex items-center justify-center gap-[3px] h-16">
            {Array.from({ length: 32 }).map((_, i) => {
              const variants = [0.7, 1.0, 0.85, 1.15, 0.95, 1.05, 0.8];
              const dur = 0.85 + variants[i % variants.length] * 0.5;
              const delay = ((i * 0.073) % 1.4).toFixed(2);
              return (
                <span
                  key={i}
                  className="block w-[3px] h-full rounded-full bg-[var(--accent-bright)] animate-voice-wave"
                  style={{
                    animationDuration: `${dur}s`,
                    animationDelay: `${delay}s`,
                    opacity: 0.35 + (i % 4) * 0.15,
                  }}
                />
              );
            })}
          </div>

          {/* Bottom hint */}
          <div className="absolute inset-x-0 bottom-4 text-center font-mono text-[10px] tracking-[0.16em] text-[var(--text-inverse)]/45">
            TAP THE BUTTON TO START
          </div>
        </div>
      </div>
    </div>
  );
}
