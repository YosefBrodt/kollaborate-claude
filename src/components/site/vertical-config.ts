export type VerticalConfig = {
  slug: string;
  industry: string;
  metaTitle: string;
  metaDescription: string;

  heroEyebrow: string;
  heroH1Top: string;
  heroH1Italic: string;
  heroSubhead: string;

  pain: {
    eyebrow: string;
    headline: string;
    subhead: string;
    bullets: string[];
  };

  scenario: {
    title: string;
    body: string;
    metricLabel: string;
    metricValue: string;
    metricSub: string;
  };

  faqAddons?: { q: string; a: string }[];
};

export const HVAC: VerticalConfig = {
  slug: "hvac",
  industry: "HVAC",
  metaTitle: "Kollaborate for HVAC · Never miss the 11pm furnace call again.",
  metaDescription:
    "Done-for-you ops for HVAC contractors in Montreal, Ottawa, and Eastern Ontario. AI receptionist that books emergency calls 24/7, review pipeline, Google Business profile, lead follow-up. Replaces a $60k front-desk seat for $1,499/mo.",

  heroEyebrow: "FOR HVAC",
  heroH1Top: "The 11pm furnace call you missed",
  heroH1Italic: "cost you a $1,200 job.",
  heroSubhead:
    "AI receptionist that picks up emergency calls in two rings, day or night. Books straight into your dispatch calendar. Sends only the real emergencies to your cell. Built for HVAC, plumbing, electrical, and trades.",

  pain: {
    eyebrow: "WHAT WE FIX",
    headline: "What an HVAC owner is losing every week.",
    subhead:
      "Every missed call after hours is a competitor getting the job. Every review you forgot to ask for is a customer Google doesn't see. Every lead that waited two days for a callback is dead.",
    bullets: [
      "After-hours and weekend emergency calls going to voicemail",
      "Tech in the field, can't pick up while elbow-deep in a furnace",
      "30 to 50 reviews behind the competitor across the city",
      "Web form leads sitting cold for 24 to 48 hours",
      "Every quote you miss is roughly $400 to $1,500 of revenue gone",
    ],
  },

  scenario: {
    title: "A 12-truck HVAC profile, typical month.",
    body: "200 inbound calls a week. 30% missed during peak season because the techs are on sites and the owner can't keep up. 60 missed calls a week. At a 30% close rate on recovered inbound, that's 18 jobs. At an avg ticket of $480, that's $8,640 a week in recovered revenue. $34,560 a month. Plus 40 fresh Google reviews instead of 2. Plus an Always-on website that ranks for emergency-furnace-repair Montreal.",
    metricLabel: "Recovered revenue / mo (typical)",
    metricValue: "$34,560",
    metricSub: "based on 60 missed calls/wk × 30% close × $480 avg ticket",
  },

  faqAddons: [
    {
      q: "Can the AI handle emergency vs non-emergency triage?",
      a: "Yes. We script your triage tree on day one. Burst pipe, no heat, no AC in summer, gas smell, etc. all flagged emergency and routed to your on-call cell. Schedule-a-tune-up gets booked into the calendar with no human touch.",
    },
    {
      q: "Do you handle dispatch software?",
      a: "We integrate. Most HVAC shops run ServiceTitan, Housecall Pro, FieldEdge, or Jobber. The AI books appointments straight into the calendar layer of those tools. Custom integrations are part of the Multi-Location tier.",
    },
  ],
};

export const RESTAURANTS: VerticalConfig = {
  slug: "restaurants",
  industry: "Restaurants",
  metaTitle: "Kollaborate for Restaurants · Reviews, reservations, and the host stand replaced.",
  metaDescription:
    "Done-for-you ops for restaurants. AI host that takes reservations 24/7, review pipeline that turns paid checks into Google reviews, Google profile actively run. Built for independents, fast-casual, and multi-location groups.",

  heroEyebrow: "FOR RESTAURANTS",
  heroH1Top: "Your rating slips one star,",
  heroH1Italic: "you lose 14% of new covers.",
  heroSubhead:
    "AI host taking reservations day and night. Review pipeline asking every paid check at the right moment. Google profile actively run with fresh photos and posts every week. The full front-of-house ops stack.",

  pain: {
    eyebrow: "WHAT WE FIX",
    headline: "What a busy restaurant is leaving behind every service.",
    subhead:
      "The host stand is too busy at 7pm to answer the phone. Servers mean to ask for a Google review, then forget at checkout. The Google profile hasn't been touched in 14 months.",
    bullets: [
      "Reservation calls during peak hours hitting voicemail",
      "4 review asks a month from a 2,500-cover restaurant",
      "Star rating drifting down 0.1 every quarter from one bad review",
      "Last Google post 8 months ago",
      "Out-of-date hours costing you walk-ins on holiday weeks",
    ],
  },

  scenario: {
    title: "An 80-cover restaurant, typical month.",
    body: "2,500 covers a month at a $58 average check. Auto review request after every paid table. 22% response rate puts 40 fresh Google reviews on your profile every month, up from 2. Within 60 days the rating climbs from 4.3 to 4.6 and the local-pack search position lifts 6 spots. That's 14% more new covers per month, conservatively.",
    metricLabel: "Net new Google reviews / mo",
    metricValue: "~40",
    metricSub: "vs ~2 today, on 2,500 covers and 22% response",
  },

  faqAddons: [
    {
      q: "Can the AI take reservations?",
      a: "Yes. We script your reservation rules on day one (party size limits, blackout dates, deposit policy, cancellation rules) and the agent books straight into Resy, OpenTable, SevenRooms, Tock, or Google Reserve.",
    },
    {
      q: "Will it sound robotic to my regulars?",
      a: "We tune the voice to your restaurant's vibe. The current AI generation is past the uncanny valley. We pipe live samples through your actual menu and reservation rules on the discovery call so you can judge.",
    },
  ],
};

export const SALONS: VerticalConfig = {
  slug: "salons",
  industry: "Salons + Spas",
  metaTitle: "Kollaborate for Salons + Spas · Bookings answered, reviews collected, profile loved.",
  metaDescription:
    "Done-for-you ops for salons, spas, and med-spas. AI receptionist booking color, lash, and facial appointments 24/7. Review pipeline. Google Business profile actively run. Replace the front-desk seat for $1,499/mo.",

  heroEyebrow: "FOR SALONS + SPAS",
  heroH1Top: "Your front desk is a $52,000 line item.",
  heroH1Italic: "We replace it for $1,499.",
  heroSubhead:
    "AI receptionist booking appointments 24/7 across your stylists, your services, and your booking rules. Review pipeline asking every paid client at the right time. The whole front-of-house, run for less than the salary alone.",

  pain: {
    eyebrow: "WHAT WE FIX",
    headline: "What salons keep paying for that doesn't pay back.",
    subhead:
      "A $52,000 front-desk seat that calls in sick, takes vacation, and turns over every 14 months. Books that lock at the chair. New clients who can't book a balayage at 9pm Sunday because the receptionist is asleep.",
    bullets: [
      "After-hours and Sunday-night booking inquiries lost to DM black holes",
      "No-show rate creeping up because nobody texts the morning-of reminder",
      "Review velocity 5x slower than the spa next door",
      "Receptionist turnover and re-training every year",
      "Google profile photos two stylists out of date",
    ],
  },

  scenario: {
    title: "A 4-chair salon, typical month.",
    body: "300 paid services a month at an $85 avg ticket. AI receptionist handles 80% of inbound booking traffic without a human. Review pipeline asks every chair at checkout via SMS. 22% reply rate means 66 net new Google reviews a month. Color clients book 9pm Sunday for the next morning. Front-desk seat eliminated.",
    metricLabel: "Front-desk seat replaced",
    metricValue: "$52,000/yr",
    metricSub: "loaded cost, vs $17,988/yr Full Stack",
  },
};

export const DENTAL: VerticalConfig = {
  slug: "dental",
  industry: "Dental + Med Practices",
  metaTitle: "Kollaborate for Dental + Med Practices · Patient calls answered, reviews collected.",
  metaDescription:
    "Done-for-you ops for dental and medical practices. AI receptionist that answers patient calls, books cleanings and consults, handles cancellations. Review pipeline. Google Business profile actively run. HIPAA-aware setup.",

  heroEyebrow: "FOR DENTAL + MED PRACTICES",
  heroH1Top: "New patients call once.",
  heroH1Italic: "If you don't pick up, they don't call back.",
  heroSubhead:
    "AI receptionist booking cleanings, consults, and emergencies straight into your practice management system. Review pipeline. Google profile run weekly. Built around your scheduling rules, your insurance check, your no-show policy.",

  pain: {
    eyebrow: "WHAT WE FIX",
    headline: "What dental and med practices lose without realizing.",
    subhead:
      "Patient acquisition runs $250-500 per new chair. A missed phone call is that money set on fire. The hygienist's no-show rate quietly grows because nobody confirms 24 hours out.",
    bullets: [
      "New-patient calls during lunch going to voicemail",
      "Hygienist's day half-empty because nobody confirmed at T-24",
      "Review profile stuck at 4.2 for two years running",
      "Front desk juggling phones, intake, insurance, checkout",
      "Specialty referral leads sitting in a shared inbox for days",
    ],
  },

  scenario: {
    title: "A 3-op dental practice, typical month.",
    body: "120 new-patient inquiries a month from web, GBP, and phone. 25% missed during peak hours. AI receptionist captures the missed 30 a month, books them into the right operatory, runs the insurance pre-check. At a $250 first-visit value and an avg lifetime of 4 years at $1,400/yr, recovered acquisition is roughly $42k/mo in lifetime revenue, conservatively.",
    metricLabel: "Recovered LTV / mo",
    metricValue: "~$42k",
    metricSub: "30 missed calls captured × 25% activation × LTV",
  },

  faqAddons: [
    {
      q: "Is this HIPAA-aware?",
      a: "Yes. We don't store recordings of clinical conversations, we route protected information through HIPAA-eligible infrastructure (Vapi BAA, encrypted transit, US-based or Canadian-based data residency depending on practice). We can also run the agent in a non-clinical scope only (booking, hours, location) if you want to keep PHI off the line entirely.",
    },
    {
      q: "Can it integrate with our practice management?",
      a: "Most modern PMS platforms (Dentrix, Eaglesoft, Curve, ClinicSense, Jane) have either an open API or a calendar layer we can write into. Custom integrations are part of the Multi-Location tier.",
    },
  ],
};

export const ALL_VERTICALS: VerticalConfig[] = [HVAC, RESTAURANTS, SALONS, DENTAL];
