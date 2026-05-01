import type { Metadata } from "next";
import { VerticalLanding } from "@/components/site/vertical-landing";
import { SALONS } from "@/components/site/vertical-config";

export const metadata: Metadata = {
  title: SALONS.metaTitle,
  description: SALONS.metaDescription,
  openGraph: {
    title: SALONS.metaTitle,
    description: SALONS.metaDescription,
  },
  alternates: { canonical: "https://kollaborate.ca/salons" },
};

export default function SalonsPage() {
  return <VerticalLanding config={SALONS} />;
}
