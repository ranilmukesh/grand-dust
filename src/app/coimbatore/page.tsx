import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cbeAreas, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Best Financial Advisory & Real Estate in Coimbatore | Grand Dust",
  description:
    "Grand Dust Global Ventures is the premier financial advisory and real estate company in Coimbatore. Get the best gold loans, land mortgage loans, and secure diamond trading.",
  alternates: { canonical: "/coimbatore" },
};

export default function CoimbatoreHubPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://grand-dust.netlify.app/coimbatore/#localbusiness",
    name: "Grand Dust Global Ventures - Coimbatore Head Office",
    image: "https://grand-dust.netlify.app/images/logo-coimbatore.png",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: "https://grand-dust.netlify.app/coimbatore",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.0168,
      longitude: 76.9558,
    },
    areaServed: ["Coimbatore", "Tamil Nadu", "India"],
    serviceType: [
      "Financial Advisory",
      "Best Gold Loan in Coimbatore",
      "Best Land Mortgage Loan in Coimbatore",
      "Best Real Estate Company in Coimbatore",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Coimbatore</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }}>Best Financial Advisory in Coimbatore</h1>
            <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
              கோயம்புத்தூரில் சிறந்த நிதி ஆலோசனை நிறுவனம்
            </p>
            <p>
              Your trusted local partner for elite financial advisor services, secure gold loans, land mortgage financing, and property transactions across Coimbatore.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Our Coimbatore Core Verticals</p>
              <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
                Coimbatore Dominance Services
              </h2>
              <p className="section-title-tamil" style={{ fontFamily: "var(--font-tamil)", textAlign: "center" }}>
                எங்கள் கோயம்புத்தூர் முக்கிய சேவைகள்
              </p>
              <div className="gold-divider gold-divider-center" />
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginTop: "40px" }}>
            <ScrollReveal>
              <div style={{
                background: "var(--bg-secondary)",
                borderRadius: "16px",
                padding: "40px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "16px" }}>🏢</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "8px" }}>
                  Best Real Estate Company in Coimbatore
                </h3>
                <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy)", fontSize: "0.85rem", marginBottom: "16px" }}>
                  கோயம்புத்தூரில் சிறந்த ரியல் எஸ்டேட்
                </p>
                <p style={{ color: "var(--text-secondary)", flexGrow: 1, marginBottom: "24px" }}>
                  Legally verified plots, villas, and commercial spaces. End-to-end support for property buyers and sellers in RS Puram, Peelamedu, Gandhipuram, and beyond.
                </p>
                <Link href="/coimbatore/real-estate" className="btn btn-primary" style={{ width: "fit-content" }}>
                  View Real Estate Services →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{
                background: "var(--bg-secondary)",
                borderRadius: "16px",
                padding: "40px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "16px" }}>💰</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "8px" }}>
                  Best Gold Loan in Coimbatore
                </h3>
                <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy)", fontSize: "0.85rem", marginBottom: "16px" }}>
                  கோயம்புத்தூரில் சிறந்த தங்கக் கடன்
                </p>
                <p style={{ color: "var(--text-secondary)", flexGrow: 1, marginBottom: "24px" }}>
                  Unlock the maximum value of your gold jewelry with the highest per-gram valuation rates, lowest interest rates, and secure redemption operations.
                </p>
                <Link href="/coimbatore/gold-loan" className="btn btn-primary" style={{ width: "fit-content" }}>
                  View Gold Loan Options →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{
                background: "var(--bg-secondary)",
                borderRadius: "16px",
                padding: "40px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "16px" }}>🏡</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "8px" }}>
                  Best Land Mortgage Loan in Coimbatore
                </h3>
                <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy)", fontSize: "0.85rem", marginBottom: "16px" }}>
                  கோயம்புத்தூரில் சிறந்த நில அடமானக் கடன்
                </p>
                <p style={{ color: "var(--text-secondary)", flexGrow: 1, marginBottom: "24px" }}>
                  Get custom funding solutions with loans against property or land mortgages up to 50% of the current market value. Quick approvals and clear processing.
                </p>
                <Link href="/coimbatore/land-mortgage-loan" className="btn btn-primary" style={{ width: "fit-content" }}>
                  View Land Mortgage Loans →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Coimbatore Areas */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px" }}>
              <p className="section-label">Hyper-Local Neighborhood Coverage</p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", color: "var(--charcoal)", marginBottom: "8px" }}>
                Programmatic Coimbatore Areas
              </h2>
              <p className="tamil" style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy)", opacity: 0.8 }}>
                கோயம்புத்தூர் வட்டார சேவைகள்
              </p>
              <div className="gold-divider gold-divider-center" />
              <p style={{ color: "var(--text-secondary)", marginTop: "16px" }}>
                We provide localized legal guidance, mortgage loan processing, and elite financial consulting in Coimbatore's primary residential and business zones.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            {cbeAreas.map((area) => (
              <ScrollReveal key={area.slug}>
                <Link
                  href={`/coimbatore/areas/${area.slug}`}
                  className="btn btn-outline"
                  style={{
                    padding: "16px 28px",
                    background: "var(--white)",
                    border: "1px solid var(--border-light)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    borderRadius: "12px",
                    boxShadow: "var(--shadow-xs)",
                    transition: "all var(--transition-fast)",
                  }}
                >
                  📍 {area.name} Area Support &rarr;
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Head Office contact section */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <ScrollReveal animation="reveal-left">
              <div>
                <p className="section-label">Visit Headquarters</p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", marginBottom: "8px" }}>
                  Grand Dust Coimbatore Office
                </h2>
                <div className="gold-divider" />
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: "20px 0" }}>
                  Serving as the headquarters and core advisory operational center. Drop by or schedule a consultation with Chairman Guruprasad for strategic real estate listings, asset refinancing, or secure diamond trading.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.05rem" }}>
                  <p>📍 <strong>HQ Coordinates:</strong> 11.0168° N, 76.9558° E (Coimbatore, TN, India)</p>
                  <p>📞 <strong>Phone Support:</strong> {siteConfig.phone}</p>
                  <p>✉️ <strong>Email Address:</strong> {siteConfig.email}</p>
                  <p>⏰ <strong>Working Hours:</strong> Mon - Sat, 9:00 AM - 7:00 PM</p>
                </div>
                <div style={{ marginTop: "24px" }}>
                  <Link href="/contact" className="btn btn-primary">Schedule Consultation →</Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-right">
              <div style={{
                height: "350px",
                background: "var(--bg-tertiary)",
                borderRadius: "16px",
                border: "1px solid var(--border-light)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
                textAlign: "center",
                boxShadow: "var(--shadow-md)"
              }}>
                <span style={{ fontSize: "3rem", marginBottom: "16px" }}>🗺️</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "12px" }}>
                  Interactive Maps & Navigation
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "20px" }}>
                  Connect with our team to obtain specific direction routes from Gandhipuram, RS Puram, Peelamedu, or other nearby sectors.
                </p>
                <a href="https://wa.me/919043425551" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  💬 WhatsApp Live Location
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container">
          <ScrollReveal>
            <div className="contact-cta-content">
              <h2 style={{ fontFamily: "var(--font-heading)" }}>Ready to Secure Your Wealth?</h2>
              <h3 style={{ fontFamily: "var(--font-tamil)" }}>உங்கள் செல்வத்தைப் பாதுகாக்க நீங்கள் தயாரா?</h3>
              <p>Connect with our expert team in Coimbatore today for personalized financial consultations.</p>
              <div className="contact-cta-buttons">
                <Link href="/contact" className="btn btn-primary">Schedule Consultation →</Link>
                <a href={`tel:${siteConfig.phone}`} className="btn btn-outline-white">📞 Call Now</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
