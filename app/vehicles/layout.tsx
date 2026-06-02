import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicles",
  description:
    "Auction-sourced vehicles via Copart and IAA, supplied by Excel Trade International Ltd for clients across West Africa.",
  alternates: { canonical: "/vehicles" },
};

export default function VehiclesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
