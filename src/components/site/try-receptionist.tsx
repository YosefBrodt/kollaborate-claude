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

  return (
    <section id="demo" className="relative bg-[var(--bg-dark-2)] text-[var(--text-inverse)] py-16 sm:py-20 border-b border-[var(--border-on-dark)] overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 grain-dark pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 30%, rgba(168,213,187,0.12) 0%, transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <FadeUp className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--accent-bright)]" />
              <span className="font-mono text-[14px] tracking-[0.18em] text-[var(--accent-bright)] font-bold">
                HEAR IT FOR YOURSELF
              </span>
            </div>
            <h2 className="mt-5 font-display font-bold leading-[1.05] tracking-[-0.025em] text-[34px] sm:text-[42px] lg:text-[48px] max-w-[560px]">
              Talk to the AI receptionist right now.
            </h2>
            <p className="mt-5 max-w-[520px] text-[17px] sm:text-[18px] leading-[1.6] text-[var(--text-inverse)]/75">
              No signup, no demo gate. Click the button, ask whatever you would
              ask if you were calling a real business. It books the
              appointment, answers pricing, escalates when it has to.
            </p>
          </FadeUp>

          <FadeUp className="lg:col-span-6" delay={0.1}>
            <div className="rounded-2xl border border-[var(--accent-bright)]/30 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm">
              {/* Web call button */}
              {status === "idle" && (
                <button
                  type="button"
                  onClick={start}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--accent-bright)] px-6 py-5 text-[var(--bg-dark)] font-bold text-[18px] transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  Talk to it through your browser
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              )}

              {status === "connecting" && (
                <div className="flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--accent-bright)]/30 border border-[var(--accent-bright)]/50 px-6 py-5 text-[var(--text-inverse)] font-bold text-[18px]">
                  <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-[var(--accent-bright)]" />
                  Connecting...
                </div>
              )}

              {status === "active" && (
                <button
                  type="button"
                  onClick={stop}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-500 hover:bg-red-600 px-6 py-5 text-white font-bold text-[18px] transition-all"
                >
                  <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-white" />
                  <span className="font-mono tabular-nums">{fmt(seconds)}</span>
                  End call
                </button>
              )}

              {status === "ended" && (
                <div className="flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--accent-bright)]/20 border border-[var(--accent-bright)]/40 px-6 py-5 text-[var(--text-inverse)] font-bold text-[18px]">
                  Thanks for trying.
                </div>
              )}

              {status === "unconfigured" && (
                <div className="rounded-xl bg-white/[0.04] border border-[var(--border-on-dark)] px-6 py-5 text-[var(--text-inverse)]/70 text-[14px] text-center">
                  Demo not yet configured. Email{" "}
                  <a href="mailto:joseph@kollaborate.ca" className="text-[var(--accent-bright)] underline underline-offset-4 font-bold">
                    joseph@kollaborate.ca
                  </a>{" "}
                  to hear it live.
                </div>
              )}

              {/* Phone call option */}
              {PHONE_NUMBER ? (
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl border-2 border-[var(--accent-bright)]/40 bg-transparent px-6 py-5 text-[var(--text-inverse)] font-bold text-[16px] transition-all hover:-translate-y-0.5 hover:border-[var(--accent-bright)] hover:bg-white/[0.05]"
                >
                  Or call {PHONE_NUMBER} from your phone
                </a>
              ) : (
                <div className="mt-3 rounded-xl border border-dashed border-[var(--border-on-dark)] bg-transparent px-6 py-4 text-[var(--text-inverse)]/55 text-[13px] text-center font-mono tracking-wide">
                  PHONE LINE COMING SOON
                </div>
              )}

              <p className="mt-4 text-[12px] text-[var(--text-inverse)]/55 leading-[1.5] text-center">
                Mic permission required for the browser call. No data is
                stored. The agent is the same one we deploy for clients.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
