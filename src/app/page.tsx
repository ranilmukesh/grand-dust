"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  ShieldIcon,
  LockIcon,
  ZapIcon,
  UserCheckIcon,
  GlobeIcon,
  HomeFinanceIcon,
  BuildingIcon,
  GoldIngotIcon,
  DiamondIcon,
  AwardIcon,
  UsersIcon,
  CoinsIcon,
  ConsultIcon,
  CheckCircleIcon,
  IndiaFlag,
  MalaysiaFlag,
  USAFlag,
} from "@/components/Icons";

function getCountryFlag(name: string) {
  switch (name) {
    case "India":
      return <IndiaFlag size={20} />;
    case "Malaysia":
      return <MalaysiaFlag size={20} />;
    case "USA":
      return <USAFlag size={20} />;
    default:
      return null;
  }
}
import {
  heroContent,
  trustBadges,
  services,
  stats,
  processSteps,
  aboutContent,
  locations,
  testimonials,
  siteConfig,
} from "@/lib/content";

function getIconComponent(iconKey: string) {
  switch (iconKey) {
    case "shield":
      return <ShieldIcon size={20} />;
    case "lock":
      return <LockIcon size={20} />;
    case "zap":
      return <ZapIcon size={20} />;
    case "user-check":
      return <UserCheckIcon size={20} />;
    case "globe":
      return <GlobeIcon size={20} />;
    case "home":
      return <HomeFinanceIcon size={20} />;
    case "building":
      return <BuildingIcon size={20} />;
    case "gold":
      return <GoldIngotIcon size={20} />;
    case "diamond":
      return <DiamondIcon size={20} />;
    case "award":
      return <AwardIcon size={22} />;
    case "users":
      return <UsersIcon size={22} />;
    case "coins":
      return <CoinsIcon size={22} />;
    case "consult":
      return <ConsultIcon size={22} />;
    case "check-circle":
      return <CheckCircleIcon size={22} />;
    default:
      return <ShieldIcon size={20} />;
  }
}

/* ==================== HERO ==================== */
function Hero() {
  return (
    <section className="hero" id="hero-section">
      <Image
        src="/images/hero-editorial.png"
        alt="Grand Dust Global Ventures - Private Wealth Advisory Architecture"
        fill
        className="hero-bg-image"
        priority
        sizes="100vw"
      />
      <div className="hero-warm-light" />
      <div className="hero-content">
        <div className="hero-text">
          <ScrollReveal>
            <p className="hero-tagline">{heroContent.tagline}</p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h1 className="hero-title" style={{ fontFamily: "var(--font-heading)" }}>
              Best Financial Advisory &
              <br />
              <span className="hero-title-accent">Real Estate Company in Coimbatore</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="hero-divider">
              <div className="hero-divider-line" />
              <div className="hero-divider-diamond" />
              <div className="hero-divider-line" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule Consultation
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
              <Link href="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <div className="hero-countries">
              <span className="hero-countries-label">PRESENCE</span>
              {heroContent.countries.map((country, idx) => (
                <div className="hero-country" key={country.name}>
                  {getCountryFlag(country.name)}
                  <span>{country.name}</span>
                  {idx < heroContent.countries.length - 1 && <span className="hero-country-dot" />}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ==================== OVERVIEW BANNER (NEXT SCROLL SECTION) ==================== */
function OverviewBanner() {
  return (
    <section className="hero-overview-banner" id="overview-banner">
      <div className="container">
        <ScrollReveal>
          <div className="hero-overview-content">
            <p className="hero-overview-label">OUR CORE CAPABILITIES</p>
            <h2 className="hero-overview-text-en" style={{ fontFamily: "var(--font-heading)" }}>
              Structured finance, property-backed lending, real estate advisory, gold, silver, diamond investments, and strategic wealth solutions.
            </h2>
            <div className="hero-overview-divider" />
            <p className="hero-overview-text-ta" style={{ fontFamily: "var(--font-tamil)" }}>
              கட்டமைக்கப்பட்ட நிதி, சொத்து அடிப்படையிலான கடன், ரியல் எஸ்டேட் ஆலோசனை, தங்கம், வெள்ளி, வைர முதலீடுகள் மற்றும் மூலோபாய செல்வ தீர்வுகள்.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ==================== TRUST BAR ==================== */
function TrustBar() {
  return (
    <section className="trust-bar" id="trust-bar">
      <div className="trust-bar-grid">
        {trustBadges.map((badge, i) => (
          <ScrollReveal key={badge.title} delay={i + 1 > 5 ? 5 : ((i + 1) as 1 | 2 | 3 | 4 | 5)}>
            <div className="trust-item">
              <div className="trust-icon">{getIconComponent(badge.iconKey)}</div>
              <div className="trust-text">
                <h4>{badge.title}</h4>
                <p style={{ fontFamily: "var(--font-tamil)" }}>{badge.titleTamil}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ==================== SERVICES ==================== */
function ServicesSection() {
  return (
    <section className="services section" id="services-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Our Services | எங்கள் சேவைகள்</p>
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
              Comprehensive Solutions for Your Financial Growth
            </h2>
            <p
              className="section-title-tamil"
              style={{ fontFamily: "var(--font-tamil)", textAlign: "center" }}
            >
              உங்கள் நிதி வளர்ச்சிக்கான விரிவான தீர்வுகள்
            </p>
            <p className="section-subtitle">
              End-to-end financial and asset solutions tailored to help you grow, secure, and
              prosper.
            </p>
            <div className="gold-divider gold-divider-center">
              <div className="gold-divider-diamond" />
            </div>
          </div>
        </ScrollReveal>

        <div className="services-grid">
          {services.map((service, i) => {
            let localUrl = `/services/${service.slug}`;
            let localCtaText = "";
            if (service.id === "gold-silver") {
              localUrl = "/coimbatore/gold-loan";
              localCtaText = "Best gold loan in Coimbatore – Know more";
            } else if (service.id === "real-estate") {
              localUrl = "/coimbatore/real-estate";
              localCtaText = "Best real estate company in Coimbatore – Know more";
            } else if (service.id === "finance-mortgage") {
              localUrl = "/coimbatore/land-mortgage-loan";
              localCtaText = "Best land mortgage loan in Coimbatore – Know more";
            }

            return (
              <ScrollReveal
                key={service.id}
                delay={i + 1 > 5 ? 5 : ((i + 1) as 1 | 2 | 3 | 4 | 5)}
              >
                <div className="service-card" id={`service-card-${service.id}`}>
                  <div className="service-card-image">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Grand Dust Global Ventures`}
                      width={400}
                      height={200}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div className="service-card-icon">{getIconComponent(service.iconKey)}</div>
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title" style={{ fontFamily: "var(--font-heading)" }}>
                      {service.title}
                    </h3>
                    <p
                      className="service-card-title-tamil"
                      style={{ fontFamily: "var(--font-tamil)" }}
                    >
                      {service.titleTamil}
                    </p>
                    <ul className="service-card-list">
                      {service.features.map((feature, j) => (
                        <li key={j}>{feature}</li>
                      ))}
                    </ul>
                    {localCtaText && (
                      <Link
                        href={localUrl}
                        className="service-card-link"
                        style={{ color: "var(--gold)", fontWeight: "600", marginBottom: "12px", display: "inline-flex" }}
                      >
                        {localCtaText} &rarr;
                      </Link>
                    )}
                    <Link href={`/services/${service.slug}`} className="service-card-link" style={{ opacity: 0.8, fontSize: "0.85rem" }}>
                      General Service Details &rarr;
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==================== WHY CHOOSE US + STATS ==================== */
function WhyChooseUs() {
  return (
    <section className="why-us section" id="why-choose-us">
      <div className="container">
        <div className="why-us-content">
          <ScrollReveal animation="reveal-left">
            <div className="why-us-text">
              <p className="section-label">Why Choose Us | எங்களை ஏன் தேர்வு செய்ய வேண்டும்?</p>
              <h2 style={{ fontFamily: "var(--font-heading)" }}>
                Built on Trust.
                <br />
                Driven by Results.
              </h2>
              <h3 style={{ fontFamily: "var(--font-tamil)" }}>
                நம்பிக்கையின் அடித்தளம்.
                <br />
                முடிவுகளால் இயக்கப்படுகிறது.
              </h3>
              <div className="gold-line" />
              <p>
                At Grand Dust Global Ventures, we combine expertise with integrity to deliver
                unmatched financial solutions. With over a decade of experience and a presence
                spanning four countries, we are your trusted partner for wealth creation.
              </p>
              <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                கிராண்ட் டஸ்ட் குளோபல் வென்ச்சர்ஸில், நிபுணத்துவத்தை நேர்மையுடன் இணைத்து
                ஒப்பற்ற நிதி தீர்வுகளை வழங்குகிறோம்.
              </p>
              <Link href="/about" className="btn btn-outline">
                Know More About Us &rarr;
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="reveal-right">
            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <span className="stat-icon">{getIconComponent(stat.iconKey)}</span>
                  <AnimatedCounter value={stat.number} />
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-label-tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                    {stat.labelTamil}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* Animated counter for stats */
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (!ref.current || hasAnimated.current) return;
    hasAnimated.current = true;
    const el = ref.current;

    const numMatch = value.match(/[\d,]+/);
    if (!numMatch) {
      el.textContent = value;
      return;
    }

    const numStr = numMatch[0].replace(/,/g, "");
    const target = parseInt(numStr, 10);
    const prefix = value.slice(0, value.indexOf(numMatch[0]));
    const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);
    const duration = 2000;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      if (el) {
        el.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
      }
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [animate]);

  return (
    <div ref={ref} className="stat-number" style={{ fontFamily: "var(--font-heading)" }}>
      {value}
    </div>
  );
}

/* ==================== PROCESS STEPS ==================== */
function ProcessStepsSection() {
  return (
    <section className="process section" id="our-process">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Our Process | எங்கள் செயல்முறை</p>
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
              Simple Steps. Solid Solutions.
            </h2>
            <p
              className="section-title-tamil"
              style={{ fontFamily: "var(--font-tamil)", textAlign: "center" }}
            >
              எளிய படிகள். உறுதியான தீர்வுகள்.
            </p>
            <p className="section-subtitle">
              From application to approval — we make it easy.
            </p>
            <div className="gold-divider gold-divider-center">
              <div className="gold-divider-diamond" />
            </div>
          </div>
        </ScrollReveal>

        <div className="process-steps">
          {processSteps.map((step, i) => (
            <ScrollReveal
              key={step.number}
              delay={i + 1 > 5 ? 5 : ((i + 1) as 1 | 2 | 3 | 4 | 5)}
            >
              <div className="process-step">
                <div className="process-step-number">
                  <span className="process-step-icon">{getIconComponent(step.iconKey)}</span>
                </div>
                <h4 style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h4>
                <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                  {step.titleTamil}
                </p>
                <p>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== ABOUT PREVIEW ==================== */
function AboutPreview() {
  return (
    <section className="about-preview section" id="about-preview">
      <div className="container">
        <div className="about-preview-content">
          <ScrollReveal animation="reveal-left">
            <div className="about-preview-image">
              <Image
                src="/images/about-section.png"
                alt="Grand Dust Global Ventures - Legacy of Trust"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="reveal-right">
            <div>
              <p className="section-label">About Us | எங்களைப் பற்றி</p>
              <h2 style={{ fontFamily: "var(--font-heading)" }}>
                A Legacy of Trust.
                <br />
                A Vision for the Future.
              </h2>
              <h3 style={{ fontFamily: "var(--font-tamil)" }}>
                நம்பிக்கையின் மரபு.
                <br />
                எதிர்காலத்திற்கான பார்வை.
              </h3>
              <div className="gold-line" />
              <p>{aboutContent.story}</p>
              <p className="tamil" style={{ fontFamily: "var(--font-tamil)" }}>
                {aboutContent.storyTamil}
              </p>
              <Link href="/about" className="btn btn-primary" style={{ marginTop: "16px" }}>
                Read Our Story &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ==================== GLOBAL PRESENCE ==================== */
function GlobalPresence() {
  return (
    <section className="presence section" id="global-presence">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Our Presence | எங்கள் இருப்பிடங்கள்</p>
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
              Global Reach. Local Expertise.
            </h2>
            <p
              className="section-title-tamil"
              style={{ fontFamily: "var(--font-tamil)", textAlign: "center" }}
            >
              உலகளாவிய எல்லை. உள்ளூர் நிபுணத்துவம்.
            </p>
            <div className="gold-divider gold-divider-center">
              <div className="gold-divider-diamond" />
            </div>
          </div>
        </ScrollReveal>

        <div className="presence-grid">
          {locations.map((loc, i) => (
            <ScrollReveal
              key={loc.city}
              delay={i + 1 > 5 ? 5 : ((i + 1) as 1 | 2 | 3 | 4 | 5)}
            >
              <div className="presence-card">
                <div className="presence-card-image">
                  <Image
                    src={loc.image}
                    alt={`Grand Dust Global Ventures office in ${loc.city}, ${loc.country}`}
                    width={400}
                    height={200}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="presence-card-body">
                  <h4>
                    <span className="flag">{loc.flag}</span>
                    {loc.city}, {loc.country}
                  </h4>
                  <p style={{ fontFamily: "var(--font-tamil)" }}>
                    {loc.cityTamil}, {loc.countryTamil}
                  </p>
                  <p>{loc.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== TESTIMONIALS ==================== */
function TestimonialsSection() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Testimonials | வாடிக்கையாளர் கருத்துக்கள்</p>
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
              Trusted by Hundreds of Clients
            </h2>
            <p
              className="section-title-tamil"
              style={{ fontFamily: "var(--font-tamil)", textAlign: "center" }}
            >
              நூற்றுக்கணக்கான வாடிக்கையாளர்களின் நம்பிக்கை
            </p>
            <div className="gold-divider gold-divider-center">
              <div className="gold-divider-diamond" />
            </div>
          </div>
        </ScrollReveal>

        <div className="testimonials-slider">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={i + 1 > 5 ? 5 : ((i + 1) as 1 | 2 | 3 | 4 | 5)}
            >
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {"★".repeat(t.rating)}
                </div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-location">{t.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== CONTACT CTA ==================== */
function ContactCTA() {
  return (
    <section className="contact-cta" id="contact-cta">
      <div className="container">
        <ScrollReveal>
          <div className="contact-cta-content">
            <h2 style={{ fontFamily: "var(--font-heading)" }}>
              Let&apos;s Build Your Financial Success Together
            </h2>
            <h3 style={{ fontFamily: "var(--font-tamil)" }}>
              உங்கள் நிதி வெற்றியை இணைந்து உருவாக்குவோம்
            </h3>
            <p>
              Get in touch with our experts today for a free consultation on loans, real estate, gold
              & silver operations, or diamond trade.
            </p>
            <div className="contact-cta-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule Consultation &rarr;
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn btn-outline-white"
              >
                📞 Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ==================== HOME PAGE ==================== */
export default function HomePage() {
  return (
    <>
      <Hero />
      <OverviewBanner />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessStepsSection />
      <AboutPreview />
      <GlobalPresence />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
