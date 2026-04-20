"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "group/item relative mt-2 rounded-2xl border border-transparent bg-transparent px-5 sm:px-6 transition-all duration-300 ease-out hover:border-[var(--border)] hover:bg-[var(--card)]/70 data-[state=open]:border-[var(--accent)]/30 data-[state=open]:bg-[var(--card)] data-[state=open]:shadow-[0_8px_28px_-14px_rgba(34,69,56,0.25)]",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 cursor-pointer items-center justify-between gap-6 py-6 sm:py-7 text-left text-[19px] sm:text-[22px] font-display font-medium text-[var(--text)] tracking-[-0.015em] transition-colors duration-200 focus-visible:outline-none data-[state=open]:text-[var(--accent)]",
        className
      )}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <span
        aria-hidden
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--muted)] transition-all duration-300 ease-out group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)] group-data-[state=open]:border-[var(--accent)] group-data-[state=open]:bg-[var(--accent)] group-data-[state=open]:text-[var(--text-inverse)]"
      >
        <span className="absolute h-[2px] w-3 rounded-full bg-current" />
        <span className="absolute h-[2px] w-3 rounded-full bg-current transition-transform duration-300 ease-out group-data-[state=open]:rotate-0 rotate-90" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[16px] sm:text-[17px] leading-[1.65] text-[var(--muted)] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-6 pr-2 sm:pr-10 max-w-[720px]", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
