"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "I already have a receptionist (or a host, or a front-desk team). Why would I need this?",
    a: "Because they can't be in two places. The AI is built to run as a co-receptionist: it picks up after the third ring, takes the call when your team is on the other line, covers the lunch hour, and handles after-hours. Nobody on your staff loses their job. You just stop losing the calls they can't catch. If you don't have a receptionist, the AI is the seat. Same product, same price, the framing changes by what you've got.",
  },
  {
    q: "What does the $1,500/mo actually include?",
    a: "All five services, managed end to end: your voice agent handling calls 24/7, the review pipeline collecting Google reviews automatically, your website, your weekly content calendar, and automated follow-up on every new lead. One team runs the whole stack. Setup fee depends on which pieces you start with and how much custom work your vertical needs. We walk you through it on the call.",
  },
  {
    q: "What if I only want one service, not the full stack?",
    a: "That works. Single services start at $750/mo. Most clients start with call handling or reviews (highest immediate ROI), see the numbers within 60 days, then add the rest. You can mix and match. Pricing is additive so three services is cheaper than the full stack bundle unless you need everything.",
  },
  {
    q: "How do I know the AI voice agent won't sound weird?",
    a: "You hear it before you pay. On the 15-minute discovery call, we pipe your actual intake questions through the agent live so you can judge the quality yourself. The current generation (Retell + Claude Sonnet 4.6) is past the uncanny valley. Your grandmother will not know. If it's not right for your business, don't buy.",
  },
  {
    q: "What happens when the AI can't handle a call?",
    a: "Escalation rules are set up during onboarding. Common escalations: emergencies, anything about pricing complex quotes, angry customers, specific people asking for specific people. Those route to your cell, your manager, or a voicemail you review in the morning. You tell us the edge cases, we configure the rules.",
  },
  {
    q: "Can I cancel?",
    a: "Month to month. No lock-in. No termination fees. We keep clients by doing the work well, not with contracts.",
  },
  {
    q: "How long does setup take?",
    a: "Most clients are live within 7 to 10 days of paying the setup fee. Day 1 to 3: discovery and scripting. Day 4 to 7: build, test with your team, iterate. Day 8 to 10: port the number or forward your main line. Reviews, website, and content pieces can launch in parallel or after.",
  },
  {
    q: "Do you work with my vertical?",
    a: "We focus on local service businesses in Montreal, Ottawa, and Eastern Ontario: dental clinics, trades (HVAC, plumbing, electrical, locksmiths), salons and spas, restaurants, and nonprofits. If you rely on phone calls, walk-in bookings, or reviews to grow, we work for you. If your business is pure e-commerce or software, we probably aren't the right fit.",
  },
  {
    q: "Who actually runs this? Is it really one team?",
    a: "Yes. Kollaborate is run out of Montreal by Joseph Brodt, with a small technical bench. You get one point of contact, one invoice, one Slack channel. No agency-of-agencies maze. We keep the roster small on purpose: three new clients per month, max.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {ITEMS.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
