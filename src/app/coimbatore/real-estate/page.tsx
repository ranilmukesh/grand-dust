import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Best Real Estate Company in Coimbatore | Grand Dust",
  description:
    "Looking for the best real estate company in Coimbatore? Grand Dust offers verified properties, exact market value, and legal registration support for buying and selling land.",
  alternates: { canonical: "/coimbatore/real-estate" },
};

export default function CoimbatoreRealEstatePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are the real estate properties in Coimbatore legally verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every single property listing and land transaction managed by Grand Dust undergoes a strict legal validation process by our expert legal advisors to guarantee clear titles and hassle-free registration."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with land registration in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We provide end-to-end guidance, covering everything from property inspection, title checks, documentation drafting, to final registration at the registrar office."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span>/</span>
              <Link href="/coimbatore">Coimbatore</Link> <span>/</span>
              <span>Real Estate</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }}>Best Real Estate Company in Coimbatore</h1>
            <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
              கோயம்புத்தூரில் சிறந்த ரியல் எஸ்டேட் நிறுவனம்
            </p>
            <p>
              Grand Dust is the premier real estate company in Coimbatore. Discover legally verified plots, commercial sectors, and residential layouts with complete transaction transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <ScrollReveal animation="reveal-left">
              <div>
                <Image
                  src="/images/best-real-estate-company-coimbatore.png"
                  alt="Best Real Estate Company in Coimbatore - Verified Properties"
                  width={600}
                  height={400}
                  style={{ borderRadius: "16px", boxShadow: "var(--shadow-lg)", width: "100%", height: "auto" }}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right">
              <div>
                <p className="section-label">Premium Property Advisory</p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "12px" }}>
                  Verified Lands & Properties
                </h2>
                <div className="gold-divider" />
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: "20px 0" }}>
                  Grand Dust has built its reputation as the most trusted property consultants in Coimbatore. We prioritize buyer security by listing only legally verified properties with clear titles, ensuring your investment is perfectly safe.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--gold)", fontWeight: "bold" }}>✓</span>
                    <div>
                      <strong>Legal Verification:</strong> Complete background checks and title searches for peace of mind.
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--gold)", fontWeight: "bold" }}>✓</span>
                    <div>
                      <strong>Market Value Optimization:</strong> Buy or sell properties at accurate market valuations without intermediaries.
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--gold)", fontWeight: "bold" }}>✓</span>
                    <div>
                      <strong>End-to-End Registration Support:</strong> Our team manages documentation, stamp duty checks, and registrar meetings.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Local Areas Grid */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem" }}>Properties Across Coimbatore</h2>
              <div className="gold-divider gold-divider-center" />
              <p style={{ color: "var(--text-secondary)", marginTop: "12px" }}>
                We actively facilitate property transactions in Coimbatore's premium sectors, offering custom listings and localized advice.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            <div style={{ background: "var(--white)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h4>RS Puram Sector</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "8px" }}>Commercial spaces and premium residential properties.</p>
            </div>
            <div style={{ background: "var(--white)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h4>Peelamedu Sector</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "8px" }}>IT corridor layouts and residential spaces near colleges.</p>
            </div>
            <div style={{ background: "var(--white)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h4>Saravanampatti Sector</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "8px" }}>Rapidly growing IT-hub apartments and land plots.</p>
            </div>
            <div style={{ background: "var(--white)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h4>Vadavalli Sector</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "8px" }}>Quiet residential plots and scenic foothills layouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-heading)" }}>Real Estate FAQ</h2>
              <div className="gold-divider gold-divider-center" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "16px" }}>
                <h4 style={{ marginBottom: "8px", color: "var(--charcoal)" }}>Are the properties legally verified?</h4>
                <p style={{ color: "var(--text-secondary)" }}>Yes, every single property listing and land transaction managed by Grand Dust undergoes a strict legal validation process by our expert legal advisors to guarantee clear titles and hassle-free registration.</p>
              </div>
              <div style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "16px" }}>
                <h4 style={{ marginBottom: "8px", color: "var(--charcoal)" }}>Do you help with land registration in Coimbatore?</h4>
                <p style={{ color: "var(--text-secondary)" }}>Absolutely. We provide end-to-end guidance, covering everything from property inspection, title checks, documentation drafting, to final registration at the registrar office.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container">
          <ScrollReveal>
            <div className="contact-cta-content">
              <h2>Schedule a Property Site Visit</h2>
              <p>Connect with Coimbatore's leading property advisors today to schedule a walkthrough of our premium verified listings.</p>
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
