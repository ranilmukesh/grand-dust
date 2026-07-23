import Link from "next/link";
import Image from "next/image";
import { siteConfig, services, locations } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer" id="site-footer" role="contentinfo">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link href="/" aria-label="Grand Dust Home">
                <Image
                  src="/images/logo.png"
                  alt="Grand Dust Global Ventures"
                  width={140}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <p>
                The World&apos;s Most Elite Financial Advisory. Empowering wealth. Building futures.
              </p>
              <p className="tamil">
                உலகின் மிக உயர்ந்த நிதி ஆலோசனை. செல்வத்தை மேம்படுத்துதல். எதிர்காலத்தை கட்டமைத்தல்.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook" id="social-facebook">📘</a>
                <a href="#" aria-label="Instagram" id="social-instagram">📸</a>
                <a href="#" aria-label="LinkedIn" id="social-linkedin">💼</a>
                <a href="#" aria-label="YouTube" id="social-youtube">🎬</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4>Quick Links</h4>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/locations">Our Locations</Link>
              <Link href="/contact">Contact Us</Link>
            </div>

            {/* Services */}
            <div className="footer-column">
              <h4>Our Services</h4>
              {services.map((service) => (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              ))}
            </div>

            {/* Locations */}
            <div className="footer-column">
              <h4>Our Locations</h4>
              {locations.map((loc) => (
                <Link key={loc.city} href="/locations">
                  {loc.flag} {loc.city}, {loc.country}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <span>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <span>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">🌍</span>
                <span>{siteConfig.locations.join(" • ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} Grand Dust Global Ventures. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
