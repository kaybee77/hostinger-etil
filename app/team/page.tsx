import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind Excel Trade International Ltd — dedicated experts and long-term partners supporting clients across West Africa.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <main>
      <section className="hero section-tight">
        <div className="wrap">
          <span className="eyebrow">Our Team</span>
          <h1>Dedicated experts. Long-term partners.</h1>
          <p className="lead">We are committed to fostering long-term relationships with our clients and partners, ensuring mutual growth and success across West Africa&apos;s industrial sector.</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div className="reveal centered-content">
            <span className="eyebrow">Our people</span>
            <h2 className="heading-line">Built on expertise</h2>
            <p className="muted">Excel Trade International Ltd is built on the expertise of professionals with deep knowledge of engineering supply chains, West African markets, and the technical requirements of the petrochemical, mining, and industrial sectors.</p>
            <p className="muted">Our team combines global sourcing capability with on-the-ground regional understanding to deliver exceptional results, and we are dedicated to fostering long-term relationships built on trust, quality, and performance.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <h2>Get in touch</h2>
            <p>For commercial enquiries, partnership discussions, or product support, reach us via the contact page.</p>
            <Link href="/contact" className="btn btn-primary">Contact ETIL</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
