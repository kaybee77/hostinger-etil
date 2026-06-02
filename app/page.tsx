import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { overviewCards, clients } from "../lib/siteData";
import RotatingGlobe from "../components/RotatingGlobe";

export const metadata: Metadata = {
  title: "Engineering Supply Solutions for West Africa",
  description:
    "Excel Trade International Ltd (ETIL) is a UK-based supplier of pumps, valves, motors, drives, and industrial equipment for West Africa's petrochemical, mining, and industrial sectors.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Excel Trade International Limited</span>
            <h1>Supply solutions for West Africa&apos;s industrial, domestic, and hospitality sectors.</h1>
            <p className="lead">UK-based specialists in strategic sourcing and supply of high-quality products for the petrochemical, mining, and general industrial sectors.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Get in touch</Link>
              <Link href="/about" className="btn btn-ghost">About ETIL</Link>
            </div>
          </div>
          <div className="globe-container">
            <RotatingGlobe />
          </div>
        </div>
      </section>

      <section className="stats-bar" aria-label="Key figures">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">11+</span>
              <span className="stat-label">Major Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">West African Markets</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Product Lines</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Core Sectors Served</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="heading-line">A trusted engineering supply partner</h2>
            <p className="muted">Excel Trade International Ltd is a distinguished UK-based engineering supply company, specialising in the strategic sourcing and supply of high-quality engineering products. We pride ourselves on providing exceptional expertise and solutions to companies operating within West Africa.</p>
            <ul className="check">
              <li>UK-headquartered engineering supply company</li>
              <li>Deep understanding of West African markets and regulations</li>
              <li>Long-standing client relationships across 6 countries</li>
            </ul>
            <Link href="/about" className="btn btn-ghost">Learn about ETIL</Link>
          </div>
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="heading-line">Comprehensive industrial supply</h2>
            <p className="muted">We deliver tailored expertise and comprehensive supply support across four core product lines, serving the petrochemical, mining, and general industrial sectors.</p>
            <ul className="check">
              <li>Pumps, valves, and fluid control systems</li>
              <li>Motors, drives, and industrial power solutions</li>
              <li>Electrical control panels and automation systems</li>
              <li>Specialised equipment for water supply and treatment</li>
            </ul>
            <Link href="/services" className="btn btn-ghost">View industrial supply</Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div className="proof-row">
            <div>
              <span className="eyebrow">Trusted clients</span>
              <h2>Serving West Africa&apos;s industrial leaders</h2>
            </div>
            <Link href="/clients" className="btn btn-ghost">See all clients</Link>
          </div>
          <div className="client-tags">
            {clients.map((client) => (
              <span className="client-tag" key={client}>{client}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="card-grid">
            {overviewCards.map((card) => (
              <article className="card" key={card.title}>
                <span className="card-image">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 300px"
                    style={{ objectFit: "cover" }}
                  />
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link href={card.href}>Learn more</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <h2>Ready to discuss your requirements?</h2>
            <p>Reach the team for product enquiries, proposals, or partnership discussions. We respond promptly to all enquiries.</p>
            <Link href="/contact" className="btn btn-primary">Get in touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
