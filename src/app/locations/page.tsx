import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { locations, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Locations - Coimbatore, Mumbai, Kuala Lumpur, USA",
  description:
    "Grand Dust Global Ventures has offices in Coimbatore, Mumbai, Kuala Lumpur, and USA. Global reach with local expertise in financial advisory, real estate, and precious metals.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Locations</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }}>Our Global Presence</h1>
            <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
              எங்கள் உலகளாவிய இருப்பு
            </p>
            <p>
              Serving clients across India, Malaysia, and the United States with trusted financial
              and asset management solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Global Reach. Local Expertise.</p>
              <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
                4 Countries. One Vision.
              </h2>
              <p className="section-title-tamil" style={{ fontFamily: "var(--font-tamil)", textAlign: "center" }}>
                4 நாடுகள். ஒரே பார்வை.
              </p>
              <div className="gold-divider gold-divider-center" />
            </div>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {locations.map((loc, i) => (
              <ScrollReveal key={loc.city}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: i % 2 === 0 ? "1.3fr 1fr" : "1fr 1.3fr",
                    gap: "48px",
                    alignItems: "center",
                    background: "var(--white)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-sm)",
                    border: "1px solid var(--cream-darker)",
                  }}
                  id={`location-${loc.city.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                    <Image
                      src={loc.image}
                      alt={`Grand Dust Global Ventures presence in ${loc.city}, ${loc.country}`}
                      width={700}
                      height={400}
                      style={{ width: "100%", height: "320px", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "40px", order: i % 2 === 0 ? 1 : 0 }}>
                    <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "8px" }}>
                      {loc.flag}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "4px" }}>
                      {loc.city}, {loc.country}
                    </h3>
                    <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy)", marginBottom: "16px" }}>
                      {loc.cityTamil}, {loc.countryTamil}
                    </p>
                    <div className="gold-divider" />
                    <p style={{ color: "var(--gray-medium)", lineHeight: 1.7, margin: "16px 0 8px" }}>
                      {loc.description}
                    </p>
                    <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy-light)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                      {loc.descriptionTamil}
                    </p>
                    <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      <a href={`tel:${siteConfig.phone}`} className="btn btn-outline" style={{ fontSize: "0.85rem" }}>
                        📞 {siteConfig.phone}
                      </a>
                      <a href={`mailto:${siteConfig.email}`} className="btn btn-outline" style={{ fontSize: "0.85rem" }}>
                        ✉️ Email Us
                      </a>
                    </div>
                  </div>
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
              <h2 style={{ fontFamily: "var(--font-heading)" }}>Visit Our Nearest Office</h2>
              <h3 style={{ fontFamily: "var(--font-tamil)" }}>எங்கள் அருகிலுள்ள அலுவலகத்தை பார்வையிடுங்கள்</h3>
              <p>Connect with us at any of our global offices for personalized service.</p>
              <div className="contact-cta-buttons">
                <Link href="/contact" className="btn btn-primary">Contact Us →</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
