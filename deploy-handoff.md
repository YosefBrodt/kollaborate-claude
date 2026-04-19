# Kollaborate · Deploy Handoff

**Date:** 2026-04-17
**Project:** Kollaborate (holding page)
**Repo:** https://github.com/YosefBrodt/kollaborate-site
**Vercel project:** `kollaborate` (team: yosefyzb-5829s-projects)
**Preview URL:** https://kollaborate-6bzbnag9t-yosefyzb-5829s-projects.vercel.app
**Target domain:** kollaborate.ca
**Registrar:** GoDaddy (account: yosefyzb@gmail.com)

---

## Status

- [x] Site built and deployed to Vercel production
- [x] `kollaborate.ca` added to Vercel project
- [x] `www.kollaborate.ca` added to Vercel project
- [ ] **DNS records pointed at Vercel (do this now in GoDaddy)**
- [ ] Verify SSL issued (Vercel auto-issues once DNS resolves)
- [ ] Run `site-health-check` skill after propagation
- [ ] Run `lighthouse-ci` skill (target 90+ all four categories)

---

## GoDaddy DNS records to set

Log into GoDaddy → My Products → kollaborate.ca → DNS → Manage Zones.

**Delete** any existing default "parked" records for `@` and `www` first (GoDaddy adds placeholder A/CNAME records on new domains that will conflict).

**Add these two records:**

| Type  | Host / Name | Value / Points to     | TTL         |
| ----- | ----------- | --------------------- | ----------- |
| A     | `@`         | `76.76.21.21`         | 600 (10 min) |
| CNAME | `www`       | `cname.vercel-dns.com` | 600          |

Save. Propagation: usually 5–30 minutes at GoDaddy, up to a few hours worst case.

(Vercel will also accept an A record on `www` pointing to `76.76.21.21`. The CNAME option above is cleaner and is what Vercel recommends for the www subdomain.)

---

## Verify after propagation

1. Check DNS resolves:
   ```
   dig kollaborate.ca +short           # expect 76.76.21.21
   dig www.kollaborate.ca +short       # expect cname.vercel-dns.com → 76.76.21.21
   ```
2. Open https://kollaborate.ca in a browser — should serve the holding page with a valid SSL cert (Vercel auto-issues via Let's Encrypt once the A record resolves).
3. Open https://www.kollaborate.ca — should redirect to the apex (Vercel handles this automatically when both domains are attached and the apex is set as the primary).
4. Run `site-health-check` skill from the agency vault to confirm SSL + HTTPS + no misconfig.
5. Run `lighthouse-ci` skill and confirm 90+ across Performance, Accessibility, Best Practices, SEO.

---

## Build notes

- Stack: Next.js 16.2.4 · React 19.2.4 · Tailwind v4 (CSS-first `@theme`) · TypeScript strict · framer-motion 12 · Radix UI (accordion + slot) · lucide-react
- Fonts via `next/font/google`: Fraunces (display), Inter Tight (body), JetBrains Mono (service card numbers)
- Color tokens baked into `src/app/globals.css` as CSS variables + Tailwind v4 `@theme inline` mapping
- OG image + favicon + apple-icon generated at build time via `next/og` file conventions (`src/app/opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`)
- `prefers-reduced-motion` gated at two layers: `FadeUp` component short-circuits to plain div, and `globals.css` disables all animations + smooth scroll
- All CTAs go to `mailto:joseph@kollaborate.ca?subject=Kollaborate%20demo%20request`
- Grep-verified: zero em dashes (U+2014) or en dashes (U+2013) in `src/`

---

## Post-launch follow-ups (outside this handoff)

- Update `agency/CLAUDE.md` Active Projects row: Kollaborate site live at kollaborate.ca
- Archive the build prompt into `agency/Builds/kollaborate/01-scaffold.md`
- If displayed contact on Replace-Me Scout sig differs, update `agency/Plans/Replace-Me Scout/email-templates.md`
- Decide whether to retire or repurpose the parallel Antigravity `Kollaborate` folder at `~/Documents/Web Projects/Kollaborate/`
