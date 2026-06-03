import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              ETIL
            </Link>
            <p>
              Excel Trade International Limited is a UK-based engineering supply specialist serving West Africa's petrochemical, mining, domestic, hospitality, and industrial sectors.
            </p>
          </div>

          <div className="footer-links">
            <span className="footer-title">Explore</span>
            <nav className="footer-nav" aria-label="Footer navigation">
              <Link href="/about">About</Link>
              <Link href="/services">Industrial</Link>
              <Link href="/team">Team</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </nav>
          </div>

          <div className="footer-contact">
            <span className="footer-title">Contact</span>
            <p className="footer-contact-line">128 City Road, London EC1V 2NX</p>
            <a href="mailto:info@exceltradeint.com" className="footer-contact-link">info@exceltradeint.com</a>
            <a href="/ETIL - Company Profile.pptx" className="btn btn-ghost footer-download">
              Download company profile
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Excel Trade International Limited. All rights reserved.</p>
          <p>Registered in England &amp; Wales · Company No. 15474851 · 128 City Road, London EC1V 2NX</p>
          <p>Supporting West Africa's industrial, domestic, and hospitality supply chains.</p>
        </div>
      </div>
    </footer>
  );
}
