import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Excel Trade International Ltd collects, uses, and protects the personal information you provide through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="hero section-tight">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="lead">
            This policy explains how Excel Trade International Limited (&quot;ETIL&quot;, &quot;we&quot;,
            &quot;us&quot;) handles personal information collected through this website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap legal-content">
          <h2 className="heading-line">Who we are</h2>
          <p className="muted">
            Excel Trade International Limited is a company registered in England and Wales
            (company number 15474851), with its registered office at 128 City Road, London
            EC1V 2NX, United Kingdom. We are the data controller for personal information
            processed through this website.
          </p>

          <h2 className="heading-line">Information we collect</h2>
          <p className="muted">
            When you contact us through our enquiry form or by email, we collect the details
            you provide — typically your name, email address, company, phone number, and the
            content of your message. We do not use tracking or advertising cookies on this site.
          </p>

          <h2 className="heading-line">How we use your information</h2>
          <p className="muted">
            We use the information you provide solely to respond to your enquiry, to provide
            the products and services you request, and to maintain our business relationship.
            We do not sell your personal information to third parties.
          </p>

          <h2 className="heading-line">Lawful basis</h2>
          <p className="muted">
            We process your information on the basis of our legitimate interest in responding
            to enquiries and conducting our business, and, where applicable, to take steps at
            your request before entering into a contract.
          </p>

          <h2 className="heading-line">Retention</h2>
          <p className="muted">
            We keep enquiry correspondence only for as long as necessary to deal with your
            request and to comply with our legal and accounting obligations.
          </p>

          <h2 className="heading-line">Your rights</h2>
          <p className="muted">
            Under UK data protection law you have the right to access, correct, or request
            deletion of your personal information, and to object to or restrict its processing.
            To exercise any of these rights, contact us using the details below.
          </p>

          <h2 className="heading-line">Contact</h2>
          <p className="muted">
            Excel Trade International Limited<br />
            128 City Road, London EC1V 2NX, United Kingdom<br />
            <a href="mailto:info@exceltradeint.com">info@exceltradeint.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
