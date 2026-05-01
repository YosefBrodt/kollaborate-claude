import type { Metadata } from "next";
import { VerticalLanding } from "@/components/site/vertical-landing";
import { RESTAURANTS } from "@/components/site/vertical-config";

export const metadata: Metadata = {
  title: RESTAURANTS.metaTitle,
  description: RESTAURANTS.metaDescription,
  openGraph: {
    title: RESTAURANTS.metaTitle,
    description: RESTAURANTS.metaDescription,
  },
  alternates: { canonical: "https://kollaborate.ca/restaurants" },
};

export default function RestaurantsPage() {
  return <VerticalLanding config={RESTAURANTS} />;
}
