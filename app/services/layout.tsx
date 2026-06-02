import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Supply",
  description:
    "ETIL delivers industrial supply expertise across pumps & valves, motors & drives, electrical & automation, and specialised equipment for petrochemical, mining, and industrial operators.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
