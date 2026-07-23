import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { services } from "@/lib/content";
import {
  HomeFinanceIcon,
  BuildingIcon,
  GoldIngotIcon,
  DiamondIcon,
  ShieldIcon,
} from "@/components/Icons";

function getServiceIcon(key: string) {
  switch (key) {
    case "home": return <HomeFinanceIcon size={32} />;
    case "building": return <BuildingIcon size={32} />;
    case "gold": return <GoldIngotIcon size={32} />;
    case "diamond": return <DiamondIcon size={32} />;
    default: return <ShieldIcon size={32} />;
  }
}

export const metadata: Metadata = {
  title: "Our Services - Finance, Real Estate, Gold & Diamond",
  description:
    "Explore Grand Dust Global Ventures' comprehensive services: Finance & Mortgage Loans, Real Estate Transactions, Gold & Silver Operations, and Diamond Trade. Best financial services in Coimbatore.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Services</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }}>Our Services</h1>
            <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
              எங்கள் சேவைகள்
            </p>
            <p>
              Comprehensive financial and asset solutions tailored to help you grow, secure, and
              prosper across the globe.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          {services.map((service, i) => (
            <ScrollReveal key={service.id}>
              <div
                id={`service-detail-${service.id}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
                  gap: "60px",
                  alignItems: "center",
                  marginBottom: i < services.length - 1 ? "80px" : "0",
                  direction: i % 2 !== 0 ? "rtl" : "ltr",
                }}
              >
                <div style={{ direction: "ltr" }}>
                  <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                    <Image
                      src={service.image}
                      alt={`${service.title} - Grand Dust Global Ventures service`}
                      width={600}
                      height={400}
                      style={{ width: "100%", height: "300px", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div style={{ direction: "ltr" }}>
                  <div style={{ color: "var(--gold)", marginBottom: "12px" }}>
                    {getServiceIcon(service.iconKey)}
                  </div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "4px" }}>
                    {service.title}
                  </h2>
                  <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy)", marginBottom: "16px", fontWeight: 500 }}>
                    {service.titleTamil}
                  </p>
                  <div className="gold-divider" />
                  <p style={{ color: "var(--gray-medium)", lineHeight: 1.7, margin: "16px 0 12px" }}>
                    {service.description}
                  </p>
                  <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy-light)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "20px" }}>
                    {service.descriptionTamil}
                  </p>
                  <ul style={{ marginBottom: "24px" }}>
                    {service.features.map((f, j) => (
                      <li key={j} style={{
                        display: "flex",
                        gap: "8px",
                        marginBottom: "8px",
                        fontSize: "0.9rem",
                        color: "var(--charcoal)",
                      }}>
                        <span style={{ color: "var(--gold-primary)", fontWeight: 700 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`} className="btn btn-primary">
                    Learn More →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container">
          <ScrollReveal>
            <div className="contact-cta-content">
              <h2 style={{ fontFamily: "var(--font-heading)" }}>Need Help Choosing the Right Service?</h2>
              <h3 style={{ fontFamily: "var(--font-tamil)" }}>சரியான சேவையைத் தேர்ந்தெடுக்க உதவி வேண்டுமா?</h3>
              <p>Our experts are ready to guide you. Get a free consultation today.</p>
              <div className="contact-cta-buttons">
                <Link href="/contact" className="btn btn-primary">Get Free Consultation →</Link>
                <a href="tel:+919043425551" className="btn btn-outline-white">📞 Call Now</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
