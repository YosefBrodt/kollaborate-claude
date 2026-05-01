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
  metaTitle: "Kollaborate for Restaurants · The reservations your host can't pick up at 7pm.",
  metaDescription:
    "Done-for-you ops for restaurants. AI co-host that backs up your front-of-house team, taking reservations after hours and during the dinner rush. Review pipeline that turns paid checks into Google reviews. Google profile actively run. Nobody on your staff gets fired.",

  heroEyebrow: "FOR RESTAURANTS",
  heroH1Top: "Your host can't answer the phone",
  heroH1Italic: "while she's seating a six-top.",
  heroSubhead:
    "AI co-host that takes reservations when your front-of-house is slammed. Picks up after 3 rings, takes after-hours bookings, handles the calls during peak service. Review pipeline asks every paid check. Google profile run weekly. Your team stays. The phone stops ringing twelve times.",

  pain: {
    eyebrow: "WHAT WE FIX",
    headline: "What's slipping past your host stand every service.",
    subhead:
      "Your front-of-house is good. Nobody's getting fired. But at 7pm on a Friday the phone rings twelve times and the host is mid-seating. After hours, the reservation line just goes to voicemail. We close those gaps.",
    bullets: [
      "Reservation calls during peak hours hitting voicemail",
      "Sunday-night and after-hours booking inquiries lost",
      "4 review asks a month from a 2,500-cover restaurant",
      "Star rating drifting down 0.1 every quarter from one bad review",
      "Out-of-date hours costing you walk-ins on holiday weeks",
    ],
  },

  scenario: {
    title: "An 80-cover restaurant, typical month.",
    body: "2,500 covers a month at a $58 average check. Front-of-house is fully staffed. AI co-host picks up after 3 rings during service, takes the reservations your team can't get to, and runs the line all night. Every paid check kicks off a review request. 22% response rate puts 40 fresh Google reviews on your profile, up from 2. Star rating climbs from 4.3 to 4.6 in 60 days. That's a 14% lift in new covers per month, conservatively. Your hosts and servers stay exactly where they are.",
    metricLabel: "Net new Google reviews / mo",
    metricValue: "~40",
    metricSub: "vs ~2 today, on 2,500 covers and 22% response",
  },

  faqAddons: [
    {
      q: "I have a host already. Why would I need this?",
      a: "Because your host can't be in two places. At 7pm they're seating, taking payment, calming a wait. The phone rings ten times. Sunday night nobody's there at all. The AI co-host picks up exactly those calls, books straight into Resy/OpenTable/SevenRooms/Tock, and never replaces a human seat.",
    },
    {
      q: "Can the AI actually take reservations?",
      a: "Yes. We script your rules on day one (party size limits, blackout dates, deposit policy, cancellation policy) and the agent books straight into Resy, OpenTable, SevenRooms, Tock, or Google Reserve.",
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
  metaTitle: "Kollaborate for Salons + Spas · Bookings 24/7, reviews collected, profile loved.",
  metaDescription:
    "Done-for-you ops for salons, spas, and med-spas. AI co-receptionist that books color, lash, and facial appointments after-hours and during peak. Pairs with your existing front desk. Review pipeline. Google Business profile actively run.",

  heroEyebrow: "FOR SALONS + SPAS",
  heroH1Top: "9pm Sunday booking inquiry.",
  heroH1Italic: "Nobody's at the desk. Now somebody is.",
  heroSubhead:
    "AI co-receptionist that takes booking inquiries when your front desk is closed, off the clock, or already on the phone. Pairs with your existing team or runs solo if you don't have one. Review pipeline asking every paid client at the right time.",

  pain: {
    eyebrow: "WHAT WE FIX",
    headline: "Where salons quietly lose bookings every week.",
    subhead:
      "Your front desk is great when they're there. After 6pm Sunday, before 10am Tuesday, at the chair when 4 chairs are running color, the calls go to voicemail. Bookings walk to the spa next door. No staff change required.",
    bullets: [
      "After-hours and Sunday-night booking inquiries lost to DM black holes",
      "Front desk on the phone with one client, three more calls in queue",
      "No-show rate creeping up because nobody texts the morning-of reminder",
      "Review velocity 5x slower than the spa next door",
      "Google profile photos two stylists out of date",
    ],
  },

  scenario: {
    title: "A 4-chair salon, typical month.",
    body: "300 paid services a month at an $85 avg ticket. Existing front desk handles peak in-person traffic. AI co-receptionist takes the 60-80 weekly booking calls that come during off-hours, lunch, or while the desk is heads-down with a client. Review pipeline asks every chair at checkout via SMS. 22% reply rate means 66 net new Google reviews a month. Your team keeps their job, the calendar fills up Sunday nights anyway.",
    metricLabel: "After-hours bookings recovered",
    metricValue: "~30 / mo",
    metricSub: "calls outside front-desk hours, captured by the AI",
  },

  faqAddons: [
    {
      q: "I already have a receptionist. Do I really need this?",
      a: "Yes, but not as a replacement. Think of it as your overflow line and your after-hours line. Your receptionist still owns daytime traffic. The AI picks up Sunday night, the pre-open hours, and the calls that come in while she's running a checkout or handling a credit card decline. No firing involved.",
    },
    {
      q: "Will it integrate with our booking software?",
      a: "Yes. Vagaro, Boulevard, GlossGenius, Mindbody, Square Appointments, Booksy, Acuity, all integrate via API or shared calendar. The agent books appointments straight into the right stylist's schedule.",
    },
  ],
};

export const DENTAL: VerticalConfig = {
  slug: "dental",
  industry: "Dental + Med Practices",
  metaTitle: "Kollaborate for Dental + Med Practices · The new-patient calls your front desk can't catch.",
  metaDescription:
    "Done-for-you ops for dental and medical practices. AI co-receptionist that backs up your front desk during the lunch hour, after hours, and when reception is mid-insurance call. Review pipeline. Google Business profile actively run. HIPAA-aware setup.",

  heroEyebrow: "FOR DENTAL + MED PRACTICES",
  heroH1Top: "New patients call once.",
  heroH1Italic: "Reception is on the other line. Now the AI picks up.",
  heroSubhead:
    "AI co-receptionist backing up your front desk: lunch hour, after hours, when reception is mid-insurance call, when the new-patient line rings during a checkout. Books cleanings, consults, and emergencies straight into your practice management system. HIPAA-aware setup. Your front-desk team stays.",

  pain: {
    eyebrow: "WHAT WE FIX",
    headline: "Where practices quietly lose new patients.",
    subhead:
      "Patient acquisition runs $250-500 per new chair. Your front desk is good but they're juggling phones, intake, insurance, and checkout simultaneously. The new-patient line rings during the lunch hour and after 5. Those calls don't call back. Twice.",
    bullets: [
      "New-patient calls during lunch going to voicemail",
      "After-hours emergency line going to voicemail",
      "Reception on insurance call, second line goes unanswered",
      "Hygienist's day half-empty because nobody confirmed at T-24",
      "Review profile stuck at 4.2 for two years running",
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
