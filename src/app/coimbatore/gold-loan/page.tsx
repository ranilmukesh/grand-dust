import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Best Gold Loan in Coimbatore | Highest Per-Gram Value | Grand Dust",
  description:
    "Looking for the best gold loan in Coimbatore? Grand Dust offers the highest per-gram valuation, low interest rates, instant cash release, and secure gold redemption services.",
  alternates: { canonical: "/coimbatore/gold-loan" },
};

export default function CoimbatoreGoldLoanPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Grand Dust offer the best gold loan in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We evaluate gold jewelry at live market rates, offering the maximum per-gram cash value with minimal documentation and highly flexible repayment periods."
        }
      },
      {
        "@type": "Question",
        "name": "Can you release pledged gold from other banks or financiers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in pledged gold redemption. We pay off your outstanding balance at other banks or gold loan companies, retrieve your gold, and pay you the highest balance value or refinance under better terms."
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
              <span>Gold Loan</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }}>Best Gold Loan in Coimbatore</h1>
            <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
              கோயம்புத்தூரில் சிறந்த தங்கக் கடன்
            </p>
            <p>
              Unlock the actual power of your assets. Grand Dust offers maximum per-gram valuation, quick disbursement, and transparent handling of your gold jewelry.
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
                <p className="section-label">Highest Per-Gram Valuation</p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "12px" }}>
                  Maximize Your Gold Value
                </h2>
                <div className="gold-divider" />
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: "20px 0" }}>
                  At Grand Dust, we evaluate your jewelry under standard weight tests using state-of-the-art testing equipment. We offer the highest gold loan value matching live market rates, paired with low interest rates and convenient tenure terms.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--gold)", fontWeight: "bold" }}>✓</span>
                    <div>
                      <strong>Highest Cash Value:</strong> Maximum cash released per gram of gold matching current market values.
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--gold)", fontWeight: "bold" }}>✓</span>
                    <div>
                      <strong>Pledged Gold Redemption:</strong> We close your existing gold loans at other banks/lenders, retrieve the jewelry, and buy back at better rates.
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--gold)", fontWeight: "bold" }}>✓</span>
                    <div>
                      <strong>100% Secure Storage:</strong> Your jewelry is insured and stored in ultra-safe locker facilities.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right">
              <div>
                <Image
                  src="/images/service-gold.png"
                  alt="Best Gold Loan in Coimbatore - Highest valuation rate"
                  width={600}
                  height={400}
                  style={{ borderRadius: "16px", boxShadow: "var(--shadow-lg)", width: "100%", height: "auto" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gold Redemption Process */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem" }}>Pledged Gold Redemption Service</h2>
              <div className="gold-divider gold-divider-center" />
              <p style={{ color: "var(--text-secondary)", marginTop: "12px" }}>
                Are your gold ornaments stuck at other institutions or pawn shops under high interest rates? We release them for you.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--white)", padding: "32px", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
              <span style={{ fontSize: "1.5rem", color: "var(--gold)", fontWeight: "bold", display: "block", marginBottom: "12px" }}>1</span>
              <h4>Share Details</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "8px" }}>Provide the existing pledge slip and balance information of your gold.</p>
            </div>
            <div style={{ background: "var(--white)", padding: "32px", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
              <span style={{ fontSize: "1.5rem", color: "var(--gold)", fontWeight: "bold", display: "block", marginBottom: "12px" }}>2</span>
              <h4>We Close the Balance</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "8px" }}>Our representative joins you, pays off the outstanding balance, and secures the jewelry.</p>
            </div>
            <div style={{ background: "var(--white)", padding: "32px", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
              <span style={{ fontSize: "1.5rem", color: "var(--gold)", fontWeight: "bold", display: "block", marginBottom: "12px" }}>3</span>
              <h4>Receive Extra Cash</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "8px" }}>We evaluate the jewelry at the highest market rate and hand over the extra balance amount to you immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-heading)" }}>Gold Loan FAQ</h2>
              <div className="gold-divider gold-divider-center" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "16px" }}>
                <h4 style={{ marginBottom: "8px", color: "var(--charcoal)" }}>How does Grand Dust offer the best gold loan in Coimbatore?</h4>
                <p style={{ color: "var(--text-secondary)" }}>We evaluate gold jewelry at live market rates, offering the maximum per-gram cash value with minimal documentation and highly flexible repayment periods.</p>
              </div>
              <div style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "16px" }}>
                <h4 style={{ marginBottom: "8px", color: "var(--charcoal)" }}>Can you release pledged gold from other banks or financiers?</h4>
                <p style={{ color: "var(--text-secondary)" }}>Yes, we specialize in pledged gold redemption. We pay off your outstanding balance at other banks or gold loan companies, retrieve your gold, and pay you the highest balance value or refinance under better terms.</p>
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
              <h2>Instant Cash for Gold</h2>
              <p>Get in touch with our Coimbatore experts today to check the live per-gram valuation of your gold jewelry.</p>
              <div className="contact-cta-buttons">
                <a href="https://wa.me/919043425551" target="_blank" rel="noopener noreferrer" className="btn btn-primary">💬 Get Quote on WhatsApp →</a>
                <a href={`tel:${siteConfig.phone}`} className="btn btn-outline-white">📞 Call Now</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
