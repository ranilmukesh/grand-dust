import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cbeAreas, siteConfig } from "@/lib/content";
import { ScrollReveal } from "@/components/ScrollReveal";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return cbeAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = cbeAreas.find((a) => a.slug === slug);
  if (!area) return {};

  return {
    title: `Best Real Estate & Gold Loan Company in ${area.name}, Coimbatore`,
    description: `Looking for premium financial advisory in ${area.name}? Grand Dust offers the best real estate, gold loans, and land mortgage loans in ${area.name}, Coimbatore.`,
    alternates: { canonical: `/coimbatore/areas/${slug}` },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = cbeAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span>/</span>
              <Link href="/coimbatore">Coimbatore</Link> <span>/</span>
              <span>Areas</span> <span>/</span>
              <span>{area.name}</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }}>Premier Financial Advisory in {area.name}, Coimbatore</h1>
            <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
              {area.name} கோயம்புத்தூரில் சிறந்த நிதி ஆலோசனை மற்றும் ரியல் எஸ்டேட்
            </p>
            <p>
              Professional property solutions, high-value gold loans, and clear land mortgage funding tailored to clients and property owners in {area.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Local Services Section */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Local Financial Ecosystem</p>
              <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
                Our Offerings in {area.name}
              </h2>
              <p className="section-title-tamil" style={{ fontFamily: "var(--font-tamil)", textAlign: "center" }}>
                {area.name} வட்டாரத்தில் எங்கள் நிதி சேவைகள்
              </p>
              <div className="gold-divider gold-divider-center" />
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginTop: "40px" }}>
            <ScrollReveal>
              <div style={{
                background: "var(--bg-secondary)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.35rem", marginBottom: "12px" }}>
                  Real Estate Transactions
                </h3>
                <p style={{ color: "var(--text-secondary)", flexGrow: 1, marginBottom: "20px", fontSize: "0.95rem" }}>
                  Buying or selling plots and commercial sites in {area.name}? Connect with Grand Dust for legally verified layout structures and premium listings.
                </p>
                <Link href="/coimbatore/real-estate" className="btn btn-outline" style={{ width: "fit-content", fontSize: "0.85rem" }}>
                  Find Verified Properties &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{
                background: "var(--bg-secondary)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.35rem", marginBottom: "12px" }}>
                  Gold Loan Operations
                </h3>
                <p style={{ color: "var(--text-secondary)", flexGrow: 1, marginBottom: "20px", fontSize: "0.95rem" }}>
                  Need fast capital release? Get the highest per-gram cash valuation against your gold jewelry in {area.name} with instant processing support.
                </p>
                <Link href="/coimbatore/gold-loan" className="btn btn-outline" style={{ width: "fit-content", fontSize: "0.85rem" }}>
                  Check Gold Loan Rates &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{
                background: "var(--bg-secondary)",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.35rem", marginBottom: "12px" }}>
                  Land Mortgage Loans
                </h3>
                <p style={{ color: "var(--text-secondary)", flexGrow: 1, marginBottom: "20px", fontSize: "0.95rem" }}>
                  Access up to 50% of the current market value of your property in {area.name}. Perfect for business or urgent capital requirements.
                </p>
                <Link href="/coimbatore/land-mortgage-loan" className="btn btn-outline" style={{ width: "fit-content", fontSize: "0.85rem" }}>
                  Get Valuation Details &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Navigation Back To Hub */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "8px" }}>Looking for Other Coimbatore Services?</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>Explore our unified central operations and regional HQ details.</p>
            <Link href="/coimbatore" className="btn btn-primary">
              View Coimbatore Central Hub &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container">
          <ScrollReveal>
            <div className="contact-cta-content">
              <h2>Advisory Service in {area.name}</h2>
              <p>Consult with Chairman Guruprasad today. Get tailored assistance for gold pledges, mortgages, and land registration details in {area.name}.</p>
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
