"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation, siteConfig } from "@/lib/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        id="main-navigation"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo" aria-label="Grand Dust Global Ventures Home">
            <Image
              src="/images/logo.png"
              alt="Grand Dust Global Ventures Griffin Logo"
              width={56}
              height={56}
              priority
              style={{ objectFit: "contain" }}
            />
            <div className="navbar-logo-text">
              <span className="navbar-logo-title" style={{ fontFamily: "var(--font-heading)" }}>
                GRAND DUST
              </span>
              <span className="navbar-logo-sub">GLOBAL VENTURES</span>
            </div>
          </Link>

          <div className="navbar-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="navbar-link">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary navbar-cta">
              Get in Touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <button
            className={`navbar-hamburger ${isMobileOpen ? "open" : ""}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileOpen}
            id="mobile-menu-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileOpen ? "open" : ""}`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div className={`mobile-menu ${isMobileOpen ? "open" : ""}`} id="mobile-menu">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mobile-menu-link"
            onClick={() => setIsMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn btn-primary mobile-menu-cta"
          onClick={() => setIsMobileOpen(false)}
        >
          Get in Touch
        </Link>
        <div style={{ marginTop: "32px", fontSize: "14px", color: "var(--gray-medium)" }}>
          <p>📞 {siteConfig.phone}</p>
          <p style={{ marginTop: "8px" }}>✉️ {siteConfig.email}</p>
        </div>
      </div>
    </>
  );
}
