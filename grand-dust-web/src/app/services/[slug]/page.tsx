import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { FAQSection } from "./FAQSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  HomeFinanceIcon,
  BuildingIcon,
  GoldIngotIcon,
  DiamondIcon,
  ShieldIcon,
} from "@/components/Icons";

function getServiceIcon(key: string) {
  switch (key) {
    case "home": return <HomeFinanceIcon size={36} />;
    case "building": return <BuildingIcon size={36} />;
    case "gold": return <GoldIngotIcon size={36} />;
    case "diamond": return <DiamondIcon size={36} />;
    default: return <ShieldIcon size={36} />;
  }
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  // JSON-LD for FAQPage
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
              <Link href="/services">Services</Link> <span>/</span>
              <span>{service.title}</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }}>{service.title}</h1>
            <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
              {service.titleTamil}
            </p>
            <p>{service.description}</p>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="service-detail">
        <div className="container">
          <div className="service-detail-content">
            <ScrollReveal animation="reveal-left">
              <div>
                <div className="service-detail-image">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Premium service by Grand Dust Global Ventures`}
                    width={700}
                    height={400}
                    priority
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-right">
              <div>
                <div style={{ color: "var(--gold)", marginBottom: "16px" }}>
                  {getServiceIcon(service.iconKey)}
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "4px" }}>
                  {service.title}
                </h2>
                <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy)", marginBottom: "16px", fontWeight: 500, fontSize: "1.1rem" }}>
                  {service.titleTamil}
                </p>
                <div className="gold-divider" />
                <p style={{ color: "var(--gray-medium)", lineHeight: 1.7, margin: "16px 0 8px" }}>
                  {service.description}
                </p>
                <p style={{ fontFamily: "var(--font-tamil)", color: "var(--burgundy-light)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "24px" }}>
                  {service.descriptionTamil}
                </p>

                <div className="service-features">
                  {service.features.map((feature, i) => (
                    <div className="service-feature" key={i}>
                      <span className="service-feature-icon">✓</span>
                      <div>
                        <h4>{feature}</h4>
                        <p style={{ fontFamily: "var(--font-tamil)" }}>{service.featuresTamil[i]}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary">Get Started →</Link>
                  <a href="https://wa.me/919043425551" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={service.faqs} serviceTitle={service.title} />

      {/* CTA */}
      <section className="contact-cta">
        <div className="container">
          <ScrollReveal>
            <div className="contact-cta-content">
              <h2 style={{ fontFamily: "var(--font-heading)" }}>Interested in {service.title}?</h2>
              <h3 style={{ fontFamily: "var(--font-tamil)" }}>{service.titleTamil} பற்றி ஆர்வமா?</h3>
              <p>Connect with our experts for personalized guidance and the best solutions.</p>
              <div className="contact-cta-buttons">
                <Link href="/contact" className="btn btn-primary">Contact Us →</Link>
                <a href={`tel:+919043425551`} className="btn btn-outline-white">📞 Call Now</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
