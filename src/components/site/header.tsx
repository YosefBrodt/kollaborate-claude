"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const MAILTO =
  "mailto:yosef@kollaborate.ca?subject=Kollaborate%20demo%20request";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md shadow-[0_1px_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#top"
          className={`font-display text-[20px] font-semibold tracking-[-0.02em] ${
            scrolled ? "text-[var(--text)]" : "text-[var(--text-inverse)]"
          } transition-colors`}
        >
          Kollaborate
          <span
            className={`${scrolled ? "text-[var(--accent)]" : "text-[var(--accent-bright)]"}`}
          >
            .
          </span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-7">
          <Link
            href="#services"
            className={`hidden sm:inline text-[14px] transition-colors ${
              scrolled
                ? "text-[var(--muted)] hover:text-[var(--text)]"
                : "text-[var(--text-inverse)]/70 hover:text-[var(--text-inverse)]"
            }`}
          >
            Services
          </Link>
          <Link
            href="#savings"
            className={`hidden sm:inline text-[14px] transition-colors ${
              scrolled
                ? "text-[var(--muted)] hover:text-[var(--text)]"
                : "text-[var(--text-inverse)]/70 hover:text-[var(--text-inverse)]"
            }`}
          >
            The math
          </Link>
          <Link
            href="#pricing"
            className={`hidden sm:inline text-[14px] transition-colors ${
              scrolled
                ? "text-[var(--muted)] hover:text-[var(--text)]"
                : "text-[var(--text-inverse)]/70 hover:text-[var(--text-inverse)]"
            }`}
          >
            Pricing
          </Link>
          <a
            href={MAILTO}
            className={`inline-flex h-9 items-center justify-center rounded-full px-4 text-[13px] font-medium transition-all duration-150 hover:-translate-y-px ${
              scrolled
                ? "bg-[var(--accent)] text-[var(--text-inverse)] hover:bg-[var(--accent-hover)]"
                : "bg-[var(--accent-bright)] text-[var(--bg-dark)] hover:bg-white"
            }`}
          >
            Book a call →
          </a>
        </nav>
      </div>
    </header>
  );
}
