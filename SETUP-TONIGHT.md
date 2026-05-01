# Ship-tonight checklist

Two things to wire up tonight to make the site fully usable. Both are env-var driven so you set them in Vercel, redeploy, done. Nothing in code to change.

---

## 1. Booking · Cal.com (recommended) or Calendly

The site has a `Booking` section (between FAQ and Final CTA) and points every "Book a call" CTA at it. Until you set the env var, it shows a clean fallback card with your email. The moment you set the var and redeploy, the embedded calendar replaces the fallback.

### Cal.com path (recommended · free, no booking limits, white-label)

1. Create account at https://cal.com (sign up with brodt.yosef@gmail.com or joseph@kollaborate.ca).
2. Set username (gets you the URL like `cal.com/joseph-brodt`).
3. Create an event type: 15-minute Zoom call. Title: "Kollaborate · 15-minute discovery call".
4. **Availability** (Settings → Availability → New schedule):
   - Mon, Tue, Wed, Thu: 18:00 to 22:00
   - Fri, Sat: unavailable (no hours)
   - Sun: 10:00 to 22:00
   - Time zone: America/Toronto (Eastern)
5. Connect Google Calendar so it blocks anything that conflicts.
6. Connect Zoom (or use Cal.com's free Daily.co video). Set the event location to that connection.
7. Copy the embed URL. You want the **inline embed** URL, which is your event URL with `/embed` appended. Examples:
   - Public link: `https://cal.com/joseph-brodt/15min`
   - Embed URL (use this): `https://cal.com/joseph-brodt/15min/embed`

8. In Vercel: Project settings → Environment Variables → add:
   ```
   NEXT_PUBLIC_BOOKING_URL=https://cal.com/joseph-brodt/15min/embed
   ```
   Apply to Production + Preview + Development.
9. Redeploy (Vercel → Deployments → ⋮ → Redeploy on the latest, OR just push another commit).

### Calendly path (works fine, less customization on free tier)

Same flow, get an inline embed URL like `https://calendly.com/joseph-brodt/15min` (no `/embed` suffix needed; the component injects Calendly's widget script automatically when it sees `calendly.com` in the URL).

```
NEXT_PUBLIC_BOOKING_URL=https://calendly.com/joseph-brodt/15min
```

### Local testing

Add the same line to `.env.local` in the project root and run `npm run dev`. The iframe will load on http://localhost:3000/#book.

---

## 2. Vapi voice receptionist (the floating "Try the receptionist live" button)

The `CallDemo` component lives in `src/components/site/call-demo.tsx`. It already returns null (renders nothing) when env vars are missing, so the site is safe to ship without it. To turn it on:

1. Vapi dashboard → Public Keys → copy your **public key** (NOT a secret key; this one is browser-safe).
2. Vapi dashboard → Assistants → pick the assistant you want demoed → copy the **assistant ID**.
3. In Vercel env vars, add:
   ```
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=pk_...
   NEXT_PUBLIC_VAPI_ASSISTANT_ID=asst_...
   ```
4. Redeploy.

The floating green "Try the receptionist live" pill will appear in the bottom-right. Visitors click it, browser asks for mic, the call connects to your assistant. Active call shows a timer and "End call" button.

> A2P verification is for **outbound SMS**, not the demo button. The Vapi web SDK uses WebRTC, so the demo works regardless of A2P status. A2P only matters when you start sending SMS from the system.

---

## After you set the vars

Quick verification pass:

```
1. Open https://kollaborate.ca
2. Click "Book a 15-minute call" in the hero.   → scrolls to #book, shows the embed
3. Try to book a Friday slot.                    → should show no availability
4. Try a Sunday 4pm slot.                        → should be available
5. Bottom-right corner has the "Try receptionist" button.
6. Click it, accept mic prompt, talk to the agent.
```

If the booking iframe is blank: hard refresh (Cmd+Shift+R), check Vercel build logs for the env var being picked up, and confirm the URL ends in `/embed` for Cal.com.

If the Vapi button doesn't appear: open DevTools console, look for "vapi" errors. Most often it's a typo in the public key or assistant ID.
