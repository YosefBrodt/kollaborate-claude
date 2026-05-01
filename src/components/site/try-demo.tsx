"use client";

import { useEffect, useRef, useState } from "react";
import { FadeUp } from "@/components/site/fade-up";

const FALLBACK_PHONE = "+15145550125";
const FALLBACK_DISPLAY = "(514) 555-0125";

function formatPhoneForDisplay(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return raw;
}

type Status = "idle" | "connecting" | "active" | "ended" | "unconfigured";

export function TryDemo() {
  const phoneRaw = process.env.NEXT_PUBLIC_DEMO_PHONE || FALLBACK_PHONE;
  const phoneDisplay = formatPhoneForDisplay(phoneRaw) || FALLBACK_DISPLAY;
  const phoneTel = phoneRaw.startsWith("+") ? phoneRaw : `+1${phoneRaw.replace(/\D/g, "")}`;

  const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
  const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;
  const vapiConfigured = Boolean(publicKey && assistantId);

  const [status, setStatus] = useState<Status>(
    vapiConfigured ? "idle" : "unconfigured"
  );
  const [seconds, setSeconds] = useState(0);
  const vapiRef = useRef<unknown>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!vapiConfigured || !publicKey) return;
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
  }, [vapiConfigured, publicKey]);

  const startCall = async () => {
    const v = vapiRef.current as { start?: (id: string) => Promise<void> } | null;
    if (!v?.start || !assistantId) return;
    setStatus("connecting");
    try {
      await v.start(assistantId);
    } catch {
      setStatus("idle");
    }
  };

  const stopCall = () => {
    const v = vapiRef.current as { stop?: () => void } | null;
    v?.stop?.();
  };

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <section className="relative bg-[var(--bg-dark-2)] text-[var(--text-inverse)] py-24 sm:py-32 overflow-hidden border-b border-[var(--border-on-dark)]">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 30%, rgba(168,213,187,0.18) 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--accent-bright)]" />
              <span className="font-mono text-[15px] tracking-[0.2em] text-[var(--accent-bright)] font-semibold">
                TRY IT BEFORE YOU BUY IT
              </span>
            </div>
            <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[40px] sm:text-[52px] lg:text-[58px]">
              Talk to the AI receptionist
              <span className="block mt-2 font-serif italic font-medium text-[var(--accent-bright)]">
                right now.
              </span>
            </h2>
            <p className="mt-7 max-w-[560px] text-[18px] sm:text-[20px] leading-[1.6] text-[var(--text-inverse)]/80">
              Most agencies show you a video. We let you call the line. Same
              voice agent that picks up your customers, answering live in
              under two rings. Ask it about pricing, booking a 7am Tuesday,
              what services you offer, whatever.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[540px]">
              <a
                href={`tel:${phoneTel}`}
                className="group flex flex-col rounded-2xl border-2 border-[var(--accent-bright)]/40 bg-white/[0.04] hover:border-[var(--accent-bright)] hover:bg-white/[0.08] px-5 py-5 transition-all hover:-translate-y-0.5"
              >
                <span className="font-mono text-[11px] tracking-[0.16em] text-[var(--accent-bright)] font-semibold">
                  CALL THE DEMO LINE
                </span>
                <span className="mt-3 font-display text-[22px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[var(--text-inverse)] tabular-nums">
                  {phoneDisplay}
                </span>
                <span className="mt-1 text-[13px] text-[var(--text-inverse)]/55 font-mono tracking-wide">
                  TAP TO CALL
                </span>
              </a>

              <BrowserDemoButton
                vapiConfigured={vapiConfigured}
                status={status}
                seconds={seconds}
                onStart={startCall}
                onStop={stopCall}
                fmt={fmt}
              />
            </div>

            <p className="mt-7 text-[13px] sm:text-[14px] text-[var(--text-inverse)]/55 leading-[1.55] max-w-[520px]">
              Demo line is the same agent your customers would reach. We
              don&apos;t store your number, don&apos;t spam you, don&apos;t
              follow up unless you ask.
            </p>
          </FadeUp>

          <FadeUp className="lg:col-span-6" delay={0.1}>
            <PhoneMock />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function BrowserDemoButton({
  vapiConfigured,
  status,
  seconds,
  onStart,
  onStop,
  fmt,
}: {
  vapiConfigured: boolean;
  status: Status;
  seconds: number;
  onStart: () => void;
  onStop: () => void;
  fmt: (s: number) => string;
}) {
  if (!vapiConfigured) {
    return (
      <div className="flex flex-col rounded-2xl border-2 border-[var(--accent-bright)]/20 bg-white/[0.02] px-5 py-5 opacity-75">
        <span className="font-mono text-[11px] tracking-[0.16em] text-[var(--text-inverse)]/55 font-semibold">
          BROWSER DEMO
        </span>
        <span className="mt-3 font-display text-[18px] sm:text-[20px] font-semibold tracking-[-0.01em] text-[var(--text-inverse)]/70">
          Coming soon
        </span>
        <span className="mt-1 text-[13px] text-[var(--text-inverse)]/55 font-mono tracking-wide">
          OR USE THE PHONE
        </span>
      </div>
    );
  }

  if (status === "active") {
    return (
      <button
        type="button"
        onClick={onStop}
        className="group flex flex-col rounded-2xl border-2 border-[var(--accent-bright)] bg-[var(--accent-bright)]/15 px-5 py-5 transition-all hover:bg-[var(--accent-bright)]/25"
      >
        <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-[var(--accent-bright)] font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-red-400 animate-pulse" />
          ON CALL · {fmt(seconds)}
        </span>
        <span className="mt-3 font-display text-[22px] font-semibold tracking-[-0.015em] text-[var(--text-inverse)]">
          End call
        </span>
        <span className="mt-1 text-[13px] text-[var(--text-inverse)]/65 font-mono tracking-wide">
          TAP TO HANG UP
        </span>
      </button>
    );
  }

  if (status === "connecting") {
    return (
      <div className="flex flex-col rounded-2xl border-2 border-[var(--accent-bright)]/60 bg-[var(--accent-bright)]/10 px-5 py-5">
        <span className="font-mono text-[11px] tracking-[0.16em] text-[var(--accent-bright)] font-semibold">
          BROWSER DEMO
        </span>
        <span className="mt-3 font-display text-[22px] font-semibold tracking-[-0.015em] text-[var(--text-inverse)]">
          Connecting...
        </span>
        <span className="mt-1 inline-block h-1 w-12 rounded-full bg-[var(--accent-bright)]/30 overflow-hidden">
          <span className="block h-full w-1/2 bg-[var(--accent-bright)] animate-pulse" />
        </span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onStart}
      className="group flex flex-col rounded-2xl bg-[var(--accent-bright)] hover:bg-white px-5 py-5 text-left transition-all hover:-translate-y-0.5 shadow-[0_12px_40px_-12px_rgba(168,213,187,0.5)]"
    >
      <span className="font-mono text-[11px] tracking-[0.16em] text-[var(--bg-dark)] font-semibold">
        BROWSER DEMO
      </span>
      <span className="mt-3 font-display text-[22px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[var(--bg-dark)]">
        Talk in your browser
      </span>
      <span className="mt-1 text-[13px] text-[var(--bg-dark)]/65 font-mono tracking-wide">
        NO PHONE NEEDED
      </span>
    </button>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto max-w-[420px]">
      <div className="aspect-[9/19] rounded-[44px] bg-[var(--bg-dark)] border border-[var(--border-on-dark)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden p-3">
        <div className="h-full w-full rounded-[34px] bg-gradient-to-b from-[#0d1f1a] to-[#091713] relative overflow-hidden">
          {/* Status bar */}
          <div className="px-6 pt-3 flex justify-between items-center text-[10px] font-mono text-[var(--text-inverse)]/65 tabular-nums">
            <span>9:41</span>
            <span>5G</span>
          </div>

          {/* Live call header */}
          <div className="mt-12 text-center">
            <div className="text-[12px] font-mono tracking-[0.18em] text-[var(--accent-bright)]/85 font-semibold">
              KOLLABORATE · LIVE CALL
            </div>
            <div className="mt-3 font-display text-[28px] font-semibold tracking-[-0.02em] text-[var(--text-inverse)]">
              AI Receptionist
            </div>
            <div className="mt-1 text-[13px] font-mono text-[var(--text-inverse)]/55 tabular-nums">
              00:34
            </div>
          </div>

          {/* Avatar / waveform */}
          <div className="mt-9 flex justify-center">
            <div className="relative h-28 w-28 rounded-full bg-[var(--accent-bright)]/20 border border-[var(--accent-bright)]/40 grid place-items-center">
              <div className="h-20 w-20 rounded-full bg-[var(--accent-bright)]/40 grid place-items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-[var(--accent-bright)]"
                  fill="currentColor"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM5 11a1 1 0 0 0-2 0 9 9 0 0 0 8 8.94V22h-3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.06A9 9 0 0 0 21 11a1 1 0 0 0-2 0 7 7 0 1 1-14 0z" />
                </svg>
              </div>
              <span className="absolute inset-0 rounded-full border-2 border-[var(--accent-bright)]/30 animate-ping" />
            </div>
          </div>

          {/* Live transcript */}
          <div className="mt-8 px-6 space-y-3.5 text-[13px] leading-[1.5] font-mono">
            <div>
              <span className="text-[var(--accent-bright)]/85 font-semibold">
                CALLER
              </span>{" "}
              <span className="text-[var(--text-inverse)]/85">
                Hi, do you have any openings this week?
              </span>
            </div>
            <div>
              <span className="text-[var(--accent-bright)]/85 font-semibold">
                AGENT
              </span>{" "}
              <span className="text-[var(--text-inverse)]/85">
                We have Tuesday at 2pm or Thursday at 10am, which works?
              </span>
            </div>
            <div>
              <span className="text-[var(--accent-bright)]/85 font-semibold">
                CALLER
              </span>{" "}
              <span className="text-[var(--text-inverse)]/85">
                Thursday 10.
              </span>
            </div>
            <div>
              <span className="text-[var(--accent-bright)]/85 font-semibold">
                AGENT
              </span>{" "}
              <span className="text-[var(--text-inverse)]/85">
                Booked. Text confirmation on the way.
              </span>
            </div>
          </div>

          {/* Wave bars */}
          <div className="absolute inset-x-0 bottom-10 px-6 flex items-end gap-1 h-8">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                className="flex-1 rounded-full bg-[var(--accent-bright)]/65"
                style={{
                  height: `${30 + Math.abs(Math.sin(i * 1.4)) * 70}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
