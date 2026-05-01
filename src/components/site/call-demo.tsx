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

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      {status === "idle" && (
        <button
          type="button"
          onClick={start}
          className="group flex items-center gap-3 rounded-full bg-[var(--accent-bright)] pl-4 pr-5 py-3 shadow-[0_10px_40px_-8px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--bg-dark)] opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--bg-dark)]" />
          </span>
          <span className="text-[14px] font-semibold text-[var(--bg-dark)]">
            Try the receptionist live
          </span>
        </button>
      )}

      {status === "connecting" && (
        <div className="flex items-center gap-3 rounded-full bg-[var(--bg-dark)] pl-4 pr-5 py-3 shadow-lg">
          <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-[var(--accent-bright)]" />
          <span className="text-[14px] font-medium text-white">
            Connecting
          </span>
        </div>
      )}

      {status === "active" && (
        <button
          type="button"
          onClick={stop}
          className="flex items-center gap-3 rounded-full border border-[var(--accent-bright)]/40 bg-[var(--bg-dark)] pl-4 pr-5 py-3 shadow-lg"
        >
          <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-red-500" />
          <span className="font-mono text-[13px] text-white/85">
            {fmt(seconds)}
          </span>
          <span className="text-[14px] font-semibold text-white">End call</span>
        </button>
      )}

      {status === "ended" && (
        <div className="flex items-center gap-3 rounded-full bg-[var(--bg-dark)] pl-4 pr-5 py-3 shadow-lg">
          <span className="text-[14px] font-medium text-white">
            Thanks for trying.
          </span>
        </div>
      )}
    </div>
  );
}
