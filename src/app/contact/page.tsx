import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig, services } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Grand Dust Global Ventures for loans against property, real estate, gold & silver operations, and diamond trade. Call +91 9043425551 or email guru25551@gmail.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Contact Us</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)" }}>Get in Touch</h1>
            <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
              எங்களைத் தொடர்பு கொள்ளுங்கள்
            </p>
            <p>
              Reach out to us for any inquiries about our services. Our team is ready to help you
              achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <ScrollReveal animation="reveal-left">
              <ContactForm services={services.map((s) => s.title)} />
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal animation="reveal-right">
              <div className="contact-info-cards">
                <div className="contact-info-card" id="contact-phone">
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>
                      <a href={`tel:${siteConfig.phone}`} style={{ color: "var(--gold-primary)", fontWeight: 600 }}>
                        {siteConfig.phone}
                      </a>
                    </p>
                    <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                      தொலைபேசி எண்
                    </p>
                  </div>
                </div>

                <div className="contact-info-card" id="contact-email">
                  <div className="contact-info-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--gold-primary)", fontWeight: 600 }}>
                        {siteConfig.email}
                      </a>
                    </p>
                    <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                      மின்னஞ்சல்
                    </p>
                  </div>
                </div>

                <div className="contact-info-card" id="contact-whatsapp">
                  <div className="contact-info-icon">💬</div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--gold-primary)", fontWeight: 600 }}
                      >
                        Chat with us
                      </a>
                    </p>
                    <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                      வாட்ஸ்அப் மூலம் தொடர்பு கொள்ளுங்கள்
                    </p>
                  </div>
                </div>

                <div className="contact-info-card" id="contact-locations">
                  <div className="contact-info-icon">🌍</div>
                  <div>
                    <h4>Our Offices</h4>
                    <p>{siteConfig.locations.join(" • ")}</p>
                    <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                      எங்கள் அலுவலகங்கள்
                    </p>
                  </div>
                </div>

                <div className="contact-info-card" id="contact-hours">
                  <div className="contact-info-icon">🕐</div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: By Appointment</p>
                    <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                      திங்கள் - சனி: காலை 9 - மாலை 7
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
