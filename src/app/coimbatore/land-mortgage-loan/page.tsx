import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Best Land Mortgage Loan in Coimbatore | Loan Against Property | Grand Dust",
  description:
    "Looking for the best land mortgage loan in Coimbatore? Grand Dust offers loans against residential and commercial properties up to 50% of the current market value with quick approvals.",
  alternates: { canonical: "/coimbatore/land-mortgage-loan" },
};

export default function CoimbatoreLandMortgageLoanPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What properties are eligible for a land mortgage loan in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide mortgage loans against clear-titled residential houses, commercial buildings, vacant plots, and agricultural land situated within the Coimbatore municipal corporation limits."
        }
      },
      {
        "@type": "Question",
        "name": "How much loan value can I get against my property?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We facilitate funding up to 50% of the property's current registered market value, providing highly competitive interest rates and swift processing terms."
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
              <span>Land Mortgage Loan</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }}>Best Land Mortgage Loan in Coimbatore</h1>
            <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
              கோயம்புத்தூரில் சிறந்த நில அடமானக் கடன்
            </p>
            <p>
              Unlock immediate liquid funds against residential or commercial real estate. Grand Dust arranges loans against property up to 50% of market value with transparent processing.
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
                  src="/images/service-finance.png"
                  alt="Best Land Mortgage Loan in Coimbatore - Property Loan"
                  width={600}
                  height={400}
                  style={{ borderRadius: "16px", boxShadow: "var(--shadow-lg)", width: "100%", height: "auto" }}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="reveal-right">
              <div>
                <p className="section-label">Property-Backed Finance</p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "12px" }}>
                  Loans Against Property Up To 50% Value
                </h2>
                <div className="gold-divider" />
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, margin: "20px 0" }}>
                  Need high-volume funding for business expansion, asset acquisitions, or personal commitments? Grand Dust coordinates mortgage loans against clear-title properties in Coimbatore, offering simple documentation and instant validation support.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--gold)", fontWeight: "bold" }}>✓</span>
                    <div>
                      <strong>Up to 50% Market Value:</strong> Gain maximum cash liquidity from residential, commercial, or plot assets.
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--gold)", fontWeight: "bold" }}>✓</span>
                    <div>
                      <strong>Quick Processing Turnaround:</strong> Transparent legal verification leading to approvals within 3-7 business days.
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "var(--gold)", fontWeight: "bold" }}>✓</span>
                    <div>
                      <strong>Flexible Repayments:</strong> Designed with attractive interest rates and customized EMI schedules.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Loan Verification Process */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem" }}>Mortgage Loan Documentation Process</h2>
              <div className="gold-divider gold-divider-center" />
              <p style={{ color: "var(--text-secondary)", marginTop: "12px" }}>
                We structure your mortgage file to ensure speedy legal clearance and rapid loan disbursement.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--white)", padding: "32px", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
              <h4>Title Assessment</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "8px" }}>Our legal team inspects original deeds, parent documents, and encumbrance certificates (EC) to ensure clear titles.</p>
            </div>
            <div style={{ background: "var(--white)", padding: "32px", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
              <h4>Market Valuation</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "8px" }}>Certified government/institutional valuators assess current property market value in Coimbatore to fix the loan principal.</p>
            </div>
            <div style={{ background: "var(--white)", padding: "32px", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
              <h4>Disbursement Setup</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "8px" }}>Documentation is finalized, deeds are registered at the sub-registrar office, and funds are disbursed directly to your account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-heading)" }}>Mortgage Loan FAQ</h2>
              <div className="gold-divider gold-divider-center" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "16px" }}>
                <h4 style={{ marginBottom: "8px", color: "var(--charcoal)" }}>What properties are eligible for a land mortgage loan in Coimbatore?</h4>
                <p style={{ color: "var(--text-secondary)" }}>We provide mortgage loans against clear-titled residential houses, commercial buildings, vacant plots, and agricultural land situated within the Coimbatore municipal corporation limits.</p>
              </div>
              <div style={{ borderBottom: "1px solid var(--border-light)", paddingBottom: "16px" }}>
                <h4 style={{ marginBottom: "8px", color: "var(--charcoal)" }}>How much loan value can I get against my property?</h4>
                <p style={{ color: "var(--text-secondary)" }}>We facilitate funding up to 50% of the property's current registered market value, providing highly competitive interest rates and swift processing terms.</p>
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
              <h2>Need a Loan Against Property?</h2>
              <p>Contact our loan processing desk in Coimbatore today for a complimentary valuation estimate of your land or property.</p>
              <div className="contact-cta-buttons">
                <Link href="/contact" className="btn btn-primary">Apply for Loan →</Link>
                <a href={`tel:${siteConfig.phone}`} className="btn btn-outline-white">📞 Call {siteConfig.phone}</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
