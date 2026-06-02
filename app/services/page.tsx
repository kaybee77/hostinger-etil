"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductLine {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  features: string[];
  image: string;
  cardDescription: string;
}

const productLines: ProductLine[] = [
  {
    id: "pumps",
    title: "Pumps & Valves",
    eyebrow: "Product line 01",
    image: "/P%26V.png",
    cardDescription: "Comprehensive range for water supply, wastewater treatment, and industrial processes.",
    description:
      "A comprehensive range of high-quality pumps and valves for water supply, wastewater treatment, and industrial processes. Our products come from internationally recognised manufacturers and are chosen for their reliability and efficiency.",
    features: [
      "Centrifugal, submersible, and positive displacement pumps",
      "Gate, globe, ball, and butterfly valves",
      "Industry-standard product sourcing and technical support",
    ],
  },
  {
    id: "motors",
    title: "Motors & Drives",
    eyebrow: "Product line 02",
    image: "/M%26D.png",
    cardDescription: "High-quality drive systems for industrial and commercial applications.",
    description:
      "We supply reliable motors and drive systems designed for demanding industrial applications. Our solutions deliver efficiency, performance, and longevity in mining, pumping, and process systems.",
    features: [
      "AC and DC electric motors for industrial use",
      "Variable frequency drives (VFDs) and soft starters",
      "Systems engineered for reliability and performance",
    ],
  },
  {
    id: "electrical",
    title: "Electrical & Automation Solutions",
    eyebrow: "Product line 03",
    image: "/E%26A.png",
    cardDescription: "Custom control panels and automation systems integration.",
    description:
      "We design, install, and service electrical control panels and automation systems, delivering customised solutions for both industrial and residential clients.",
    features: [
      "Custom electrical control panel design and build",
      "Automation system integration and commissioning",
      "Ongoing servicing and technical support",
    ],
  },
  {
    id: "equipment",
    title: "Specialised Equipment",
    eyebrow: "Product line 04",
    image: "/se.png",
    cardDescription: "Premium swing check valves and specialised equipment for water treatment.",
    description:
      "Our specialised equipment range includes premium swing check valves and engineered items for water supply and treatment systems, helping projects run safely and reliably.",
    features: [
      "Swing check valves for water treatment and distribution",
      "Equipment designed for operational reliability and safety",
      "Products compliant with international engineering standards",
    ],
  },
];

export default function ServicesPage() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <main>
      <section className="page-top-banner">
        <Image src="/indutrial.png" alt="Industrial supplies banner" fill priority sizes="100vw" />
      </section>

      <section className="hero section-tight">
        <div className="wrap">
          <span className="eyebrow">Industrial</span>
          <h1>Industrial supply expertise across four core areas.</h1>
          <p className="lead">
            Leveraging our industry knowledge and manufacturer partnerships, we deliver
            tailored supply solutions to petrochemical, mining, and industrial operators.
          </p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap card-grid">
          {productLines.map((line) => (
            <article
              key={line.id}
              className="card"
              style={{ cursor: "pointer" }}
            >
              <span className="card-image">
                <Image
                  src={line.image}
                  alt={line.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 300px"
                  style={{ objectFit: "cover" }}
                />
              </span>
              <span className="eyebrow">{line.eyebrow}</span>
              <h3>{line.title}</h3>
              <p>{line.cardDescription}</p>
              <button
                className="dropdown-toggle"
                onClick={() => handleToggleDropdown(line.id)}
                aria-expanded={openDropdown === line.id}
              >
                {openDropdown === line.id ? "Hide details" : "View details"}
              </button>
              {openDropdown === line.id && (
                <div className="dropdown-content card-dropdown-content">
                  <p className="muted">{line.description}</p>
                  <ul className="check">
                    {line.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div className="cta-band">
            <h2>Discuss your specification</h2>
            <p>
              Share your product and project requirements and we will respond with a
              recommended solution.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
