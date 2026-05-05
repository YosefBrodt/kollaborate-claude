"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 md:hidden transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="border-t border-[var(--accent)]/15 bg-[var(--bg)]/95 backdrop-blur-md px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(34,69,56,0.18)]">
        <Link
          href="/#book"
          className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-[16px] font-semibold text-[var(--text-inverse)] transition-all active:scale-[0.98]"
        >
          Book a 15-minute call
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
