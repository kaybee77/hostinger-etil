import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ETIL",
  description:
    "Excel Trade International Ltd is a distinguished UK-based engineering supply company specialising in strategic sourcing and supply of high-quality products for clients across West Africa.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-top-banner">
        <Image
          src="/about.png"
          alt="ETIL global supply across automotive, industrial, logistics, hospitality, education, and household sectors"
          fill
          priority
          sizes="100vw"
        />
      </section>

      <section className="hero section-tight">
        <div className="wrap">
          <span className="eyebrow">About ETIL</span>
          <h1>Built on expertise. Driven by partnership.</h1>
          <p className="lead">Our mission is to be the leading provider of engineering supply solutions in West Africa, delivering unparalleled service, innovative products, and industry-specific expertise.</p>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap about-features">
          <article className="about-feature">
            <div className="about-feature-image">
              <Image
                src="/wwa.png"
                alt="Who we are — ETIL's engineering supply team"
                width={720}
                height={480}
                priority
              />
            </div>
            <div className="about-feature-content">
              <span className="eyebrow">Who we are</span>
              <h2 className="heading-line">A team built for engineering supply excellence</h2>
              <p className="muted">We are a UK-based engineering supply specialist focused on delivering tailored sourcing and logistics solutions across West Africa. Our experienced team combines global supplier reach with local market insight to support asset-intensive industries.</p>
            </div>
          </article>
          <article className="about-feature">
            <div className="about-feature-image">
              <Image
                src="/wwd.png"
                alt="What we do — connecting clients with the right products and partners"
                width={720}
                height={480}
                priority
              />
            </div>
            <div className="about-feature-content">
              <span className="eyebrow">What we do</span>
              <h2 className="heading-line">We connect clients with the right products and partners</h2>
              <p className="muted">From sourcing engineering components to managing logistics, compliance, and project delivery, we help clients simplify the supply chain and access reliable equipment for industrial, automotive, and infrastructure projects.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="heading-line">A distinguished engineering supply company</h2>
            <p className="muted">Excel Trade International Ltd is a distinguished UK-based engineering supply company, specialising in the strategic sourcing and supply of high-quality engineering products. We pride ourselves on our ability to provide exceptional expertise and solutions to companies operating within West Africa.</p>
            <p className="muted">We are dedicated to fostering long-term relationships with our clients and partners, ensuring mutual growth and success in the region.</p>
            <div className="about-story-image">
              <Image
                src="/ourstory.png"
                alt="ETIL our story image"
                width={720}
                height={480}
                priority
              />
            </div>
          </div>
          <div>
            <span className="eyebrow">Regional presence</span>
            <h2 className="heading-line">Trusted across West Africa</h2>
            <p className="muted">With a robust presence in West Africa, Excel Trade International Ltd has established itself as a trusted and reliable partner. Our deep understanding of the local markets and regulatory environments enables us to offer customised solutions that meet the unique needs of our clients in the region.</p>
            <div className="about-story-image">
              <Image
                src="/AdobeStock_228562363.jpeg"
                alt="ETIL trusted across West Africa"
                width={720}
                height={480}
                priority
              />
            </div>
            <div className="facts">
              <div className="fact"><strong>HQ</strong><span>London, UK</span></div>
              <div className="fact"><strong>Markets</strong><span>6 countries</span></div>
              <div className="fact"><strong>Focus</strong><span>West Africa</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <div className="reveal centered-content">
            <span className="eyebrow">Why choose ETIL</span>
            <h2 className="heading-line centered">Four reasons to partner with us</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Quality Assurance</h3>
              <p>We provide products from top manufacturers, ensuring high standards and compliance with industry regulations.</p>
            </article>
            <article className="card">
              <h3>Competitive Pricing</h3>
              <p>Our pricing strategy ensures you get the best value for your investment without compromising on quality.</p>
            </article>
            <article className="card">
              <h3>Deep Expertise</h3>
              <p>Our team of experts is available to help you choose the right products and provide ongoing technical support.</p>
            </article>
            <article className="card">
              <h3>Global Reach</h3>
              <p>We serve clients worldwide, delivering products and services that meet international engineering standards.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <h2>Work with us</h2>
            <p>Introduce a project or request a conversation about your supply needs.</p>
            <Link href="/contact" className="btn btn-primary">Contact ETIL</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
