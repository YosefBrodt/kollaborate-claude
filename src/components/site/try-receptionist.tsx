"use client";

import { useEffect, useRef, useState } from "react";
import { FadeUp } from "@/components/site/fade-up";

type Status = "idle" | "connecting" | "active" | "ended" | "unconfigured";

const PHONE_NUMBER = process.env.NEXT_PUBLIC_DEMO_PHONE;

export function TryReceptionist() {
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

  const stateLabel =
    status === "active"
      ? "ON CALL"
      : status === "connecting"
      ? "DIALING"
      : status === "ended"
      ? "ENDED"
      : status === "unconfigured"
      ? "UNAVAILABLE"
      : "STANDBY";

  return (
    <section
      id="demo"
      className="relative bg-[var(--bg)] py-20 sm:py-24 border-b border-[var(--border)] scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <FadeUp className="lg:col-span-6">
            <span className="block h-px w-12 bg-[var(--accent)]" />
            <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-[36px] sm:text-[44px] lg:text-[52px] max-w-[560px]">
              Hear what an answered call
              <span className="block mt-2 font-serif italic font-medium text-[var(--accent)] tracking-[-0.015em]">
                actually sounds like.
              </span>
            </h2>
            <p className="mt-7 max-w-[520px] text-[18px] sm:text-[19px] leading-[1.6] text-[var(--muted)]">
              This is the same voice agent we put on a real plumbing line in
              Verdun last month. It answers in under 2 rings, books the job, and
              texts the customer a confirmation. All without paging anyone.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <DemoButton
                status={status}
                seconds={seconds}
                fmt={fmt}
                onStart={start}
                onStop={stop}
              />
              <a
                href="#services"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-[var(--accent)] bg-transparent px-7 text-[15px] sm:text-[16px] font-semibold text-[var(--accent)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-[var(--text-inverse)]"
              >
                See what else we run
                <span aria-hidden>→</span>
              </a>
            </div>

            <p className="mt-5 font-mono text-[12px] tracking-[0.14em] text-[var(--muted)] font-bold">
              EN / FR · 24/7 · ROUTES TO A HUMAN IF ASKED
            </p>

            {PHONE_NUMBER && (
              <p className="mt-3 text-[14px] text-[var(--muted)]">
                Or call{" "}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-[var(--accent)] underline underline-offset-4 decoration-2 font-semibold hover:text-[var(--accent-hover)]"
                >
                  {PHONE_NUMBER}
                </a>{" "}
                from your phone.
              </p>
            )}
          </FadeUp>

          <FadeUp className="lg:col-span-6" delay={0.1}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7 shadow-[0_24px_70px_-32px_rgba(20,40,30,0.2)]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--accent)] text-[var(--text-inverse)] font-display text-[15px] font-bold"
                  >
                    K
                  </span>
                  <div>
                    <div className="font-display text-[15px] sm:text-[16px] font-semibold tracking-[-0.01em] text-[var(--text)]">
                      Bell Plumbing, main line
                    </div>
                    <div className="font-mono text-[11px] tracking-[0.14em] text-[var(--muted)]">
                      {status === "active" ? `LIVE · ${fmt(seconds)}` : "IDLE"}
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.16em] font-bold text-[var(--muted)]">
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full ${
                      status === "active"
                        ? "bg-[var(--accent)] animate-beacon-pulse"
                        : "bg-[var(--muted)]/50"
                    }`}
                  />
                  {stateLabel}
                </span>
              </div>

              <div className="mt-5 rounded-xl bg-[var(--bg)] border border-[var(--border)] px-5 py-7 sm:py-9 text-center">
                <span className="font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] font-bold">
                  SIMULATED CALL
                </span>
                <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.55] text-[var(--text)] max-w-[300px] mx-auto">
                  {status === "active" ? (
                    <>
                      You are on with the agent. Talk like a real customer
                      booking a job.
                    </>
                  ) : status === "connecting" ? (
                    <>Connecting your mic to the agent.</>
                  ) : status === "ended" ? (
                    <>Call ended. Press start to run it again.</>
                  ) : status === "unconfigured" ? (
                    <>
                      Demo not yet configured. Email{" "}
                      <a
                        href="mailto:joseph@kollaborate.ca"
                        className="text-[var(--accent)] underline underline-offset-2 font-semibold"
                      >
                        joseph@kollaborate.ca
                      </a>{" "}
                      to hear it live.
                    </>
                  ) : (
                    <>
                      Press <strong>Start the call</strong> to watch a real
                      booking happen end to end.
                    </>
                  )}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                <Stat label="rings to answer" value="< 2" />
                <Stat label="humans paged" value="0" />
                <Stat label="until SMS confirm" value="30s" />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function DemoButton({
  status,
  seconds,
  fmt,
  onStart,
  onStop,
}: {
  status: Status;
  seconds: number;
  fmt: (s: number) => string;
  onStart: () => void;
  onStop: () => void;
}) {
  if (status === "active") {
    return (
      <button
        type="button"
        onClick={onStop}
        className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-red-600 px-8 text-[16px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-red-700"
      >
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
        End call · <span className="font-mono tabular-nums">{fmt(seconds)}</span>
      </button>
    );
  }
  if (status === "connecting") {
    return (
      <span className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-8 text-[16px] font-semibold text-[var(--text-inverse)]">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent-bright)] animate-pulse" />
        Connecting...
      </span>
    );
  }
  if (status === "ended") {
    return (
      <span className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--accent-bright)]/30 border border-[var(--accent-bright)] px-8 text-[16px] font-semibold text-[var(--accent)]">
        Thanks for trying.
      </span>
    );
  }
  if (status === "unconfigured") {
    return (
      <a
        href="#book"
        className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 text-[16px] font-semibold text-[var(--text-inverse)] animate-breathe-pulse transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
      >
        Hear it on the call
        <span aria-hidden>→</span>
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={onStart}
      className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 text-[16px] font-semibold text-[var(--text-inverse)] animate-breathe-pulse transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
    >
      Start the call
      <span aria-hidden>→</span>
    </button>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-3">
      <div className="font-display text-[18px] sm:text-[20px] font-bold tracking-[-0.02em] text-[var(--text)] tabular-nums">
        {value}
      </div>
      <div className="mt-0.5 text-[11px] sm:text-[12px] leading-[1.3] text-[var(--muted)]">
        {label}
      </div>
    </div>
  );
}
