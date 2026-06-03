import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General Supplies",
  description:
    "ETIL supplies household, hotel, and school consumables tailored for domestic living, hospitality, and education facilities across West Africa.",
  alternates: { canonical: "/general" },
};

export default function GeneralPage() {
  return (
    <main>
      <section className="page-top-banner">
        <Image
          src="/generalpage.png"
          alt="General supplies banner"
          fill
          priority
          sizes="100vw"
        />
      </section>

      <section className="hero section-tight">
        <div className="wrap">
          <span className="eyebrow">General</span>
          <h1>General supplies tailored for hotels, household living and schools.</h1>
          <p className="lead">We provide hospitality essentials, everyday household goods and school materials through trusted sourcing, reliable logistics and cost-effective purchasing.</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div className="card-grid">
            <article className="card">
              <h3>Household supplies</h3>
              <p>Cleaning chemicals, kitchen essentials, furniture, home entertainment systems, lighting and smart home automation products for residential, staff housing and serviced living spaces.</p>
            </article>
            <article className="card">
              <h3>Hotel supplies</h3>
              <p>Quality linen, guestroom amenities, hospitality disposables, F&B service goods and facility support products for hotels and resorts.</p>
            </article>
            <article className="card">
              <h3>School supplies</h3>
              <p>Stationery, classroom furniture, safety equipment and campus maintenance essentials for schools, colleges and training centres.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap service-section">
          <span className="eyebrow">General supply</span>
          <h2 className="heading-line">Reliable consumables for everyday operations</h2>
          <p className="muted">From routine supplies to specialised facility goods, we help businesses and institutions keep operations running smoothly with cost-effective sourcing and dependable delivery.</p>
          <ul className="check">
            <li>Cleaning and sanitation products</li>
            <li>Guestroom and dining amenities</li>
            <li>Classroom stationery, furniture and maintenance supplies</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <h2>Need general supplies?</h2>
            <p>Tell us your requirements and we will match you with the right products and delivery plan.</p>
            <Link href="/contact" className="btn btn-primary">Contact us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
