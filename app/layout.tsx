import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const siteUrl = "https://www.exceltradeint.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Excel Trade International Ltd | ETIL",
    template: "%s | ETIL",
  },
  description:
    "Excel Trade International Ltd is a UK-based supply specialist serving West Africa with high-quality products for industrial, domestic, hospitality, petrochemical, and mining sectors.",
  keywords: [
    "engineering supply",
    "West Africa",
    "petrochemical",
    "mining",
    "pumps and valves",
    "industrial supply",
    "Excel Trade International",
    "ETIL",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Excel Trade International Ltd",
    title: "Excel Trade International Ltd | ETIL",
    description:
      "UK-based engineering supply specialist serving West Africa's petrochemical, mining, domestic, hospitality, and industrial sectors.",
    url: siteUrl,
    locale: "en_GB",
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
        alt: "Excel Trade International Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel Trade International Ltd | ETIL",
    description:
      "UK-based engineering supply specialist serving West Africa's petrochemical, mining, domestic, hospitality, and industrial sectors.",
    images: ["/home.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/etillogo.jpeg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Excel Trade International Limited",
  alternateName: "ETIL",
  url: siteUrl,
  logo: `${siteUrl}/etillogo.jpeg`,
  description:
    "UK-based engineering supply specialist serving West Africa's petrochemical, mining, domestic, hospitality, and industrial sectors.",
  email: "info@exceltradeint.com",
  telephone: ["+44 7438 532624", "+44 7444 230741"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "128 City Road",
    addressLocality: "London",
    postalCode: "EC1V 2NX",
    addressCountry: "GB",
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "UK Company Number",
    value: "15474851",
  },
  areaServed: ["Ghana", "Nigeria", "Côte d'Ivoire", "Senegal", "Burkina Faso", "Togo"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
