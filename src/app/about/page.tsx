import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { aboutContent, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us - Our Story, Mission & Vision",
  description:
    "Learn about Grand Dust Global Ventures — founded by Guruprasad. A legacy of trust in financial advisory, real estate, gold & silver operations, and diamond trade across India, Malaysia & USA.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>About Us</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }}>About Grand Dust</h1>
            <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
              கிராண்ட் டஸ்ட் பற்றி
            </p>
            <p>
              A legacy of trust. A vision for the future. Discover the story behind the world&apos;s
              most elite financial advisory.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <ScrollReveal animation="reveal-left">
              <div>
                <p className="section-label">Our Story | எங்கள் கதை</p>
                <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
                  Empowering Wealth. Building Futures.
                </h2>
                <p className="section-title-tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                  செல்வத்தை மேம்படுத்துதல். எதிர்காலத்தை கட்டமைத்தல்.
                </p>
                <div className="gold-divider" />
                <p style={{ color: "var(--gray-medium)", lineHeight: 1.7, marginBottom: "12px" }}>
                  {aboutContent.story}
                </p>
                <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy-light)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  {aboutContent.storyTamil}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-right">
              <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                <Image
                  src="/images/about-section.png"
                  alt="Grand Dust Global Ventures corporate office representing trust and legacy"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <p className="section-label">Leadership | தலைமை</p>
              <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
                {siteConfig.founderTitle}
              </h2>
              <p className="section-title-tamil" style={{ fontFamily: "var(--font-tamil)", textAlign: "center" }}>
                {siteConfig.founderTitleTamil}
              </p>
              <div className="gold-divider gold-divider-center" />
              <div style={{
                margin: "32px auto",
                background: "var(--white)",
                borderRadius: "16px",
                padding: "40px",
                border: "1px solid var(--cream-darker)",
                boxShadow: "var(--shadow-md)",
              }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "8px" }}>
                  {siteConfig.founder}
                </h3>
                <p style={{ color: "var(--gold-primary)", fontWeight: 600, marginBottom: "16px" }}>
                  {siteConfig.founderTitle}
                </p>
                <p style={{ color: "var(--gray-medium)", lineHeight: 1.7 }}>
                  With a visionary approach and deep industry expertise, Guruprasad founded Grand
                  Dust Global Ventures to bridge the gap between traditional financial services and
                  modern global markets. Under his leadership, the company has grown from its roots in
                  Coimbatore to establish a presence across Mumbai, Kuala Lumpur, and the USA.
                </p>
                <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy-light)", fontSize: "0.9rem", marginTop: "12px", lineHeight: 1.7 }}>
                  முன்னோக்கு பார்வை மற்றும் ஆழ்ந்த தொழில்துறை நிபுணத்துவத்துடன், குருபிரசாத்
                  பாரம்பரிய நிதி சேவைகளுக்கும் நவீன உலகச் சந்தைகளுக்கும் இடையிலான இடைவெளியை
                  நிரப்ப கிராண்ட் டஸ்ட் குளோபல் வென்ச்சர்ஸை நிறுவினார்.
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "24px", flexWrap: "wrap" }}>
                  <a href={`tel:${siteConfig.phone}`} className="btn btn-outline" style={{ fontSize: "0.85rem" }}>
                    📞 {siteConfig.phone}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="btn btn-outline" style={{ fontSize: "0.85rem" }}>
                    ✉️ {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <ScrollReveal delay={1}>
              <div style={{
                background: "var(--burgundy)",
                borderRadius: "16px",
                padding: "40px",
                color: "var(--white)",
                height: "100%",
              }}>
                <p style={{ color: "var(--gold-light)", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>
                  Our Mission | எங்கள் நோக்கம்
                </p>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "16px" }}>
                  Empowering Financial Success
                </h3>
                <p style={{ lineHeight: 1.7, opacity: 0.9 }}>{aboutContent.mission}</p>
                <p style={{ fontFamily: "var(--font-tamil)", color: "var(--gold-lighter)", fontSize: "0.85rem", marginTop: "12px", lineHeight: 1.7 }}>
                  {aboutContent.missionTamil}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div style={{
                background: "var(--charcoal)",
                borderRadius: "16px",
                padding: "40px",
                color: "var(--white)",
                height: "100%",
              }}>
                <p style={{ color: "var(--gold-light)", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>
                  Our Vision | எங்கள் பார்வை
                </p>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "16px" }}>
                  A Global Standard of Trust
                </h3>
                <p style={{ lineHeight: 1.7, opacity: 0.9 }}>{aboutContent.vision}</p>
                <p style={{ fontFamily: "var(--font-tamil)", color: "var(--gold-lighter)", fontSize: "0.85rem", marginTop: "12px", lineHeight: 1.7 }}>
                  {aboutContent.visionTamil}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Our Values | எங்கள் மதிப்புகள்</p>
              <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
                The Pillars We Stand On
              </h2>
              <p className="section-title-tamil" style={{ fontFamily: "var(--font-tamil)", textAlign: "center" }}>
                நாங்கள் நிற்கும் தூண்கள்
              </p>
              <div className="gold-divider gold-divider-center" />
            </div>
          </ScrollReveal>
          <div className="values-grid">
            {aboutContent.values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i + 1 > 5 ? 5 : ((i + 1) as 1|2|3|4|5)}>
                <div className="value-card">
                  <span className="value-icon">{value.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-heading)" }}>{value.title}</h3>
                  <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>{value.titleTamil}</p>
                  <p>{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container">
          <ScrollReveal>
            <div className="contact-cta-content">
              <h2 style={{ fontFamily: "var(--font-heading)" }}>Ready to Partner with Excellence?</h2>
              <h3 style={{ fontFamily: "var(--font-tamil)" }}>சிறப்புடன் கூட்டாளியாக தயாரா?</h3>
              <p>Reach out to us today and take the first step towards your financial success.</p>
              <div className="contact-cta-buttons">
                <Link href="/contact" className="btn btn-primary">Contact Us →</Link>
                <Link href="/services" className="btn btn-outline-white">Explore Services</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
