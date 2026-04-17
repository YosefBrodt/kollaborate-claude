"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const MAILTO =
  "mailto:yosef@kollaborate.ca?subject=Kollaborate%20demo%20request";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="#top"
          className="font-display text-[20px] font-medium tracking-tight text-[var(--text)]"
        >
          Kollaborate
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7">
          <Link
            href="#services"
            className="hidden sm:inline text-[14px] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            What we do
          </Link>
          <a
            href={MAILTO}
            className="inline-flex h-9 items-center justify-center rounded-full bg-[var(--accent)] px-4 text-[13px] font-medium text-white transition-all duration-150 hover:-translate-y-px hover:bg-[var(--accent-hover)]"
          >
            Book a call
          </a>
        </nav>
      </div>
      <div
        className={`h-px w-full bg-[var(--border)] transition-opacity duration-200 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
}
