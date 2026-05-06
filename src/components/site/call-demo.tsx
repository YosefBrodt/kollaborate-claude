"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "connecting" | "active" | "ended" | "unconfigured";

export function CallDemo() {
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
        timerRef.current = setInterval(
          () => setSeconds((s) => s + 1),
          1000
        );
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

  if (status === "unconfigured") return null;

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const PhoneIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px] text-[var(--accent-bright)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  return (
    <div className="hidden sm:block fixed bottom-6 right-6 z-50">
      {status === "idle" && (
        <button
          type="button"
          onClick={start}
          className="group flex items-center gap-3 rounded-full border-2 border-[var(--accent-bright)]/50 bg-[var(--bg-dark)]/95 backdrop-blur-md pl-5 pr-6 py-4 shadow-[0_14px_36px_-12px_rgba(0,0,0,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-bright)] hover:bg-[var(--bg-dark)] hover:shadow-[0_18px_44px_-10px_rgba(168,213,187,0.35)]"
        >
          <PhoneIcon />
          <span className="text-[15px] font-semibold text-[var(--text-inverse)]">
            Try the receptionist live
          </span>
          <span
            aria-hidden
            className="text-[var(--accent-bright)] transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </button>
      )}

      {status === "connecting" && (
        <div className="flex items-center gap-3 rounded-full border-2 border-[var(--accent-bright)]/60 bg-[var(--bg-dark)]/95 backdrop-blur-md pl-5 pr-6 py-4 shadow-[0_14px_36px_-12px_rgba(0,0,0,0.55)]">
          <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--accent-bright)]" />
          <span className="text-[15px] font-semibold text-[var(--text-inverse)]">
            Connecting
          </span>
        </div>
      )}

      {status === "active" && (
        <button
          type="button"
          onClick={stop}
          className="flex items-center gap-3 rounded-full border-2 border-[var(--accent-bright)]/70 bg-[var(--bg-dark)] pl-5 pr-6 py-4 shadow-[0_14px_36px_-12px_rgba(0,0,0,0.55)]"
        >
          <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-red-400" />
          <span className="font-mono text-[13px] text-white/85 tabular-nums">
            {fmt(seconds)}
          </span>
          <span className="text-[15px] font-semibold text-white">End call</span>
        </button>
      )}

      {status === "ended" && (
        <div className="flex items-center gap-3 rounded-full border-2 border-[var(--accent-bright)]/40 bg-[var(--bg-dark)]/95 backdrop-blur-md pl-5 pr-6 py-4 shadow-[0_14px_36px_-12px_rgba(0,0,0,0.55)]">
          <span className="text-[15px] font-semibold text-[var(--text-inverse)]">
            Thanks for trying.
          </span>
        </div>
      )}
    </div>
  );
}
