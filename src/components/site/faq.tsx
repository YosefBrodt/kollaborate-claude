"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "What does the $1,500/mo actually include?",
    a: "All five services managed end to end. Your voice agent, your review pipeline, your website, your content calendar, your lead follow-up. One team handles the whole stack. Setup fee depends on which pieces you start with. We'll walk through it on the call.",
  },
  {
    q: "What if I only want one service, not the full stack?",
    a: "That works too. Single services start at $750/mo. Most clients start with call handling or reviews, then add the rest within 90 days once they see the numbers.",
  },
  {
    q: "How do I know the AI won't sound weird on my calls?",
    a: "You hear it before you pay. On the discovery call, we run your actual intake questions through the agent live so you can judge the quality yourself. If it's not right for you, you don't buy.",
  },
  {
    q: "Can I cancel?",
    a: "Month to month, no lock-in, no termination fees. We keep you by doing the work well, not by contracts.",
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
