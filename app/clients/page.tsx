import type { Metadata } from "next";
import Link from "next/link";
import { clients } from "../../lib/siteData";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "ETIL has long-standing relationships with West Africa's industrial leaders, including TotalEnergies, Vivo Energy, Newmont Ghana, GOIL, and the Volta River Authority.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  return (
    <main>
      <section className="hero section-tight">
        <div className="wrap">
          <span className="eyebrow">Our Clients</span>
          <h1>Long-standing relationships with West Africa&apos;s industrial leaders.</h1>
          <p className="lead">Our clientele includes key players in petrochemical, mining, and general industrial sectors, built on quality, reliability, and trust.</p>
        </div>
      </section>

      <section className="stats-bar" aria-label="Client reach">
        <div className="wrap stats-grid">
          <div className="stat-item">
            <span className="stat-number">11+</span>
            <span className="stat-label">Major Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">Countries Served</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Industry Sectors</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">European Locations</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="reveal centered-content">
            <span className="eyebrow">Customer base</span>
            <h2 className="heading-line">Who we serve</h2>
            <p className="muted">We have cultivated strong, long-standing relationships with companies across West Africa, including Ghana, Côte d&apos;Ivoire, Nigeria, Senegal, Burkina Faso, and Togo.</p>
          </div>
          <div className="client-tags">
            {clients.map((name) => (
              <span className="client-tag" key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div className="reveal centered-content">
            <span className="eyebrow">Sectors served</span>
            <h2 className="heading-line centered">Where we operate</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Petrochemical</h3>
              <p>Supplying pumps, valves, motors, and automation equipment to oil terminals, refineries, and fuel distribution companies.</p>
            </article>
            <article className="card">
              <h3>Mining</h3>
              <p>Supporting mining operations with robust industrial equipment tailored to gold, bauxite, and mineral extraction.</p>
            </article>
            <article className="card">
              <h3>General Industrial</h3>
              <p>Serving utilities, water authorities, and engineering service companies with reliable supply and deep technical expertise.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <h2>Become a client</h2>
            <p>We are happy to discuss your supply requirements and share relevant product references.</p>
            <Link href="/contact" className="btn btn-primary">Contact us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
