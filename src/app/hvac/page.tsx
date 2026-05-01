import type { Metadata } from "next";
import { VerticalLanding } from "@/components/site/vertical-landing";
import { HVAC } from "@/components/site/vertical-config";

export const metadata: Metadata = {
  title: HVAC.metaTitle,
  description: HVAC.metaDescription,
  openGraph: {
    title: HVAC.metaTitle,
    description: HVAC.metaDescription,
  },
  alternates: { canonical: "https://kollaborate.ca/hvac" },
};

export default function HVACPage() {
  return <VerticalLanding config={HVAC} />;
}
