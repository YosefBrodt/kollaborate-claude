"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const VERTICAL_LABELS: Record<string, string> = {
  "/hvac": "HVAC + Trades",
  "/restaurants": "Restaurants",
  "/salons": "Salons + Spas",
  "/dental": "Dental + Med",
};

// "The math" anchor differs by page (/ uses #roi, verticals also have #roi).
// Falls back gracefully if the section isn't on the page.
const SECTION_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#roi", label: "The math" },
  { href: "#pricing", label: "Pricing" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "/";
  const verticalLabel = VERTICAL_LABELS[pathname];

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
          ? "bg-[var(--bg)]/92 backdrop-blur-md shadow-[0_1px_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 gap-4">
        <div className="flex items-center gap-3.5 min-w-0">
          <Link
            href="#top"
            className={`font-display text-[26px] sm:text-[28px] font-semibold tracking-[-0.025em] shrink-0 ${
              scrolled ? "text-[var(--text)]" : "text-[var(--text-inverse)]"
            } transition-colors`}
          >
            Kollaborate
            <span
              className={`${
                scrolled ? "text-[var(--accent)]" : "text-[var(--accent-bright)]"
              }`}
            >
              .
            </span>
          </Link>
          {verticalLabel && (
            <VerticalBadge label={verticalLabel} scrolled={scrolled} />
          )}
        </div>

        <nav className="flex items-center gap-5 sm:gap-8 shrink-0">
          {SECTION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hidden md:inline text-[16px] font-medium transition-colors ${
                scrolled
                  ? "text-[var(--text)]/80 hover:text-[var(--text)]"
                  : "text-[var(--text-inverse)]/85 hover:text-[var(--text-inverse)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#book"
            className={`inline-flex h-11 items-center justify-center rounded-full px-5 text-[15px] font-semibold transition-all duration-150 hover:-translate-y-px ${
              scrolled
                ? "bg-[var(--accent)] text-[var(--text-inverse)] hover:bg-[var(--accent-hover)]"
                : "bg-[var(--accent-bright)] text-[var(--bg-dark)] hover:bg-white"
            }`}
          >
            Book a call →
          </Link>
        </nav>
      </div>
    </header>
  );
}

function VerticalBadge({
  label,
  scrolled,
}: {
  label: string;
  scrolled: boolean;
}) {
  return (
    <div
      className={`group inline-flex items-center gap-2 rounded-full pl-3 pr-1 py-1 transition-colors ${
        scrolled
          ? "bg-[var(--accent-bright)]/25 border border-[var(--accent)]/30"
          : "bg-[var(--accent-bright)]/15 border border-[var(--accent-bright)]/40"
      }`}
      title={`Currently viewing the ${label} page`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${
            scrolled ? "bg-[var(--accent)]" : "bg-[var(--accent-bright)]"
          }`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            scrolled ? "bg-[var(--accent)]" : "bg-[var(--accent-bright)]"
          }`}
        />
      </span>
      <span
        className={`font-mono text-[11px] sm:text-[12px] tracking-[0.14em] font-semibold whitespace-nowrap ${
          scrolled ? "text-[var(--accent)]" : "text-[var(--accent-bright)]"
        }`}
      >
        {label.toUpperCase()}
      </span>
      <Link
        href="/"
        aria-label="Return to general site"
        className={`grid h-6 w-6 place-items-center rounded-full transition-colors ${
          scrolled
            ? "hover:bg-[var(--accent)]/15 text-[var(--accent)]/70 hover:text-[var(--accent)]"
            : "hover:bg-white/15 text-[var(--accent-bright)]/70 hover:text-[var(--accent-bright)]"
        }`}
      >
        <svg
          viewBox="0 0 14 14"
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3l8 8M11 3L3 11" />
        </svg>
      </Link>
    </div>
  );
}
