import type { Metadata } from "next";
import { VerticalLanding } from "@/components/site/vertical-landing";
import { DENTAL } from "@/components/site/vertical-config";

export const metadata: Metadata = {
  title: DENTAL.metaTitle,
  description: DENTAL.metaDescription,
  openGraph: {
    title: DENTAL.metaTitle,
    description: DENTAL.metaDescription,
  },
  alternates: { canonical: "https://kollaborate.ca/dental" },
};

export default function DentalPage() {
  return <VerticalLanding config={DENTAL} />;
}
