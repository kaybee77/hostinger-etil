import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Excel Trade International Ltd for product enquiries, proposals, or partnership discussions. Based at 128 City Road, London EC1V 2NX.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero section-tight">
        <div className="wrap">
          <span className="eyebrow">Contact Us</span>
          <h1>Let's discuss your requirements.</h1>
          <p className="lead">For product enquiries, partnership discussions, or general information about our services, get in touch using the details below. We respond promptly to all enquiries.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <span className="eyebrow">Contact details</span>
            <h2 className="heading-line">Reach us directly</h2>

            <div className="contact-detail">
              <span className="contact-detail-icon" aria-hidden="true">📍</span>
              <div>
                <span className="contact-detail-label">Address</span>
                <address>
                  Excel Trade International Limited<br />
                  128 City Road<br />
                  London EC1V 2NX, United Kingdom
                </address>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon" aria-hidden="true">📞</span>
              <div>
                <span className="contact-detail-label">Phone</span>
                <a href="tel:+447438532624">+44 7438 532624</a>
                <a href="tel:+447444230741">+44 7444 230741</a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon" aria-hidden="true">✉️</span>
              <div>
                <span className="contact-detail-label">Email</span>
                <a href="mailto:info@exceltradeint.com">info@exceltradeint.com</a> <br />
                <a href="mailto:Sales@exceltradeint.co.uk">Sales@exceltradeint.co.uk</a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon" aria-hidden="true">🌐</span>
              <div>
                <span className="contact-detail-label">Website</span>
                <a href="https://www.exceltradeint.com">www.exceltradeint.com</a>
              </div>
            </div>

            <p className="mt-lg">
              <a className="btn btn-primary" href="mailto:info@exceltradeint.com?subject=Enquiry%20from%20ETIL%20website">Send us an email</a>
            </p>
            <p className="mt-md">
              <a className="btn btn-ghost" href="/ETIL - Company Profile.pptx">Download company profile</a>
            </p>
          </div>

          <div>
            <span className="eyebrow">Office hours</span>
            <h2 className="heading-line">When to reach us</h2>
            <p className="muted">Monday – Friday<br />09:00 – 17:00 GMT</p>

            <div className="mt-xl">
              <span className="eyebrow">Markets served</span>
              <p className="muted">We serve clients across West Africa and welcome enquiries from all regions.</p>
              <div className="client-tags">
                <span className="client-tag">Ghana</span>
                <span className="client-tag">Nigeria</span>
                <span className="client-tag">Côte d'Ivoire</span>
                <span className="client-tag">Senegal</span>
                <span className="client-tag">Burkina Faso</span>
                <span className="client-tag">Togo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="wrap">
          <span className="eyebrow">Send an enquiry</span>
          <h2 className="heading-line">Message us directly</h2>
          <p className="muted">Complete the form below and our team will respond promptly.</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
