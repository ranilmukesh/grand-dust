# Grand Dust Global Ventures — Premium Next.js Website

Build a world-class, bilingual (English/Tamil) website for a premium financial advisory & asset management company operating across India, Malaysia, and the USA.

## User Review Required

> [!IMPORTANT]
> **Bilingual Strategy:** Every content section will show English first with Tamil translation immediately below (not a language switcher). This matches the brochure's bilingual pattern. Let me know if you'd prefer a toggle/switcher instead.

> [!IMPORTANT]
> **Contact Form:** The site will include a contact form section. Since there's no backend specified, it will use a `mailto:` link and WhatsApp direct link for now. If you want a functional form (e.g., Formspree, EmailJS), let me know.

> [!IMPORTANT]
> **No Tailwind:** Per the brochure + brand palette, I'll use vanilla CSS with CSS custom properties for the design system. The `create-next-app` default includes Tailwind — I will remove it and use vanilla CSS.

## Open Questions

> [!NOTE]
> **Domain name?** If you have a domain (e.g., `granddustglobal.com`), I'll set `metadataBase` and canonical URLs accordingly. For now I'll use a placeholder.

> [!NOTE]
> **Google Analytics / Tag Manager ID?** If you have one, I'll wire it in. Otherwise skipping.

---

## Proposed Changes

### Architecture Overview

```
d:\grand dust\
├── public/
│   ├── images/           ← brand assets (logo, brochure images)
│   ├── favicon.ico
│   ├── llms.txt          ← AEO: AI crawler discoverability
│   └── llms-full.txt     ← AEO: full content for AI engines
├── src/
│   ├── app/
│   │   ├── layout.tsx         ← Root layout (metadata, fonts, JSON-LD)
│   │   ├── page.tsx           ← Home page (all sections)
│   │   ├── about/page.tsx     ← About Us page
│   │   ├── services/
│   │   │   ├── page.tsx                    ← Services overview
│   │   │   ├── finance-mortgage/page.tsx   ← Finance & Mortgage Loans
│   │   │   ├── real-estate/page.tsx        ← Real Estate Transactions
│   │   │   ├── gold-silver/page.tsx        ← Gold & Silver Operations
│   │   │   └── diamond-trade/page.tsx      ← Diamond Trade
│   │   ├── locations/page.tsx  ← Global Presence
│   │   ├── contact/page.tsx    ← Contact form + info
│   │   ├── sitemap.ts          ← Dynamic sitemap generation
│   │   └── robots.ts           ← Robots.txt generation
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── StatsCounter.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── GlobalPresence.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactCTA.tsx
│   │   ├── ScrollReveal.tsx     ← Intersection Observer wrapper
│   │   └── WhatsAppFloat.tsx    ← Floating WhatsApp button
│   ├── styles/
│   │   └── globals.css          ← Full design system + component styles
│   └── lib/
│       └── content.ts           ← All bilingual content (EN/TA)
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

### Design System (Vanilla CSS)

#### [NEW] [globals.css](file:///d:/grand dust/src/styles/globals.css)

**Color Palette** — derived from brand assets:
| Token | Value | Usage |
|---|---|---|
| `--gold-primary` | `#C8963E` | Primary brand gold |
| `--gold-light` | `#E8C876` | Hover states, accents |
| `--gold-dark` | `#8B6914` | Text on light backgrounds |
| `--burgundy` | `#5B1A2A` | Secondary brand color (from brochure) |
| `--burgundy-light` | `#7A2E40` | Hover states |
| `--cream` | `#FDF8F0` | Page backgrounds |
| `--cream-dark` | `#F5EDE0` | Card backgrounds |
| `--charcoal` | `#1A1A1A` | Primary text |
| `--white` | `#FFFFFF` | Clean backgrounds |

**Typography:**
- Headings: `Playfair Display` (serif, premium feel) via `next/font`
- Body: `Inter` (clean readability) via `next/font`
- Tamil text: `Noto Sans Tamil` via `next/font`

**Design Principles:**
- Clean, airy layouts with generous whitespace
- Subtle gold gradient borders and dividers
- Soft box shadows (no harsh edges)
- Smooth scroll-reveal animations (fade-up, fade-in)
- Micro-interactions on hover (scale, gold shimmer)
- No flashy neon — elegant, understated luxury

---

### Component Details

#### [NEW] [Navbar.tsx](file:///d:/grand dust/src/components/Navbar.tsx)
- Fixed top navigation with transparent → solid background on scroll
- Logo (griffin) on left, navigation links center/right
- Mobile: hamburger menu with slide-in drawer
- "Get in Touch" CTA button with gold gradient
- Smooth backdrop blur on scroll

#### [NEW] [Hero.tsx](file:///d:/grand dust/src/components/Hero.tsx)
- Full-viewport hero with premium gradient overlay
- Animated text reveal: "The World's Most Elite Financial Advisory"
- Founder info badge with subtle gold border
- Country flags + location badges
- Two CTAs: "Explore Services" (gold) + "Contact Us" (outlined)
- Subtle parallax-like effect on scroll

#### [NEW] [ServicesSection.tsx](file:///d:/grand dust/src/components/ServicesSection.tsx)
- 4-card grid layout with generated service imagery
- Each card: image top, icon overlay, title (EN + Tamil), bullet points
- Hover: subtle lift + gold border glow
- Scroll-reveal stagger animation
- "Learn More →" links to individual service pages

#### [NEW] [WhyChooseUs.tsx](file:///d:/grand dust/src/components/WhyChooseUs.tsx)
- 5 trust pillars: Trusted Expertise, Secure & Transparent, Quick Approvals, Client First, Global Presence
- Icon + title + description (bilingual)
- Animated counters for stats (10+ years, 500+ clients, ₹500 Cr+, 4 locations)

#### [NEW] [ProcessSteps.tsx](file:///d:/grand dust/src/components/ProcessSteps.tsx)
- Horizontal timeline: Consultation → Evaluation → Approval → Disbursement
- Numbered steps with icons, connected by gold line
- Responsive: becomes vertical on mobile

#### [NEW] [GlobalPresence.tsx](file:///d:/grand dust/src/components/GlobalPresence.tsx)
- 4 location cards with generated city imagery
- Coimbatore, Mumbai, Kuala Lumpur, USA
- Bilingual labels + country flags

#### [NEW] [Testimonials.tsx](file:///d:/grand dust/src/components/Testimonials.tsx)
- Carousel/slider with client testimonials
- Star ratings, quotes, client names + locations
- Auto-play with pause on hover

#### [NEW] [ScrollReveal.tsx](file:///d:/grand dust/src/components/ScrollReveal.tsx)
- Reusable Intersection Observer wrapper component
- Supports fade-up, fade-in, slide-left, slide-right animations
- Configurable threshold and delay for stagger effects

#### [NEW] [WhatsAppFloat.tsx](file:///d:/grand dust/src/components/WhatsAppFloat.tsx)
- Fixed bottom-right floating WhatsApp button
- Pulse animation to draw attention
- Links to `wa.me/919043425551`

---

### Pages

#### [NEW] [Home page.tsx](file:///d:/grand dust/src/app/page.tsx)
Assembles all sections in order:
1. Hero
2. Trust Badges Bar
3. Services Overview
4. Why Choose Us + Stats
5. Our Process
6. About Preview
7. Global Presence
8. Testimonials
9. Contact CTA

#### [NEW] [About page](file:///d:/grand dust/src/app/about/page.tsx)
- Company story, vision, mission
- Founder section with details
- Core values
- Bilingual throughout

#### [NEW] Service Pages (4 pages)
Each with:
- Hero banner with service-specific generated imagery
- Detailed description (EN + Tamil)
- Key features/benefits list
- FAQ section (helps SEO + AEO)
- Contact CTA

#### [NEW] [Locations page](file:///d:/grand dust/src/app/locations/page.tsx)
- All 4 office locations with generated city images
- Address details, contact info per location

#### [NEW] [Contact page](file:///d:/grand dust/src/app/contact/page.tsx)
- Contact form (name, phone, email, service interest, message)
- Direct contact info (phone, email, WhatsApp)
- Embedded Google Maps placeholder
- Office hours

---

### SEO Implementation

| Item | Detail |
|---|---|
| **Title** | "Grand Dust Global Ventures - Best Financial Advisory & Real Estate in Coimbatore" |
| **Meta Description** | Targets "best real estate company coimbatore", "best gold loan in coimbatore", "best land mortgage loan" |
| **JSON-LD** | Organization, WebSite, LocalBusiness, BreadcrumbList, FAQPage schemas |
| **Sitemap** | Auto-generated `sitemap.ts` with all pages |
| **Robots** | Allow all, disallow `/api` |
| **Internal Links** | Descriptive anchor text, cross-linked services |
| **Images** | `next/image` with alt text, AVIF/WebP, blur placeholders |
| **Fonts** | Self-hosted via `next/font`, `display: swap` |
| **Headings** | Single `<h1>` per page, proper H2→H6 hierarchy |

**Target SEO Keywords:**
- "best real estate company coimbatore"
- "best gold loan in coimbatore"
- "best land mortgage loan coimbatore"
- "loan against property coimbatore"
- "diamond trade india"
- "gold jewelry coimbatore"
- "property mortgage loan"
- "Grand Dust Global Ventures"

---

### AEO (Answer Engine Optimization)

#### [NEW] [llms.txt](file:///d:/grand dust/public/llms.txt)
Structured markdown for AI crawlers with page hierarchy and summaries.

#### [NEW] [llms-full.txt](file:///d:/grand dust/public/llms-full.txt)
Full content export for AI engines.

---

### Image Assets

I will generate the following images using the image generation tool:
1. **Hero background** — Premium gold/architectural composition
2. **Finance & Mortgage** — Property/real estate themed
3. **Real Estate** — Land/property themed
4. **Gold & Silver** — Gold jewelry/operations themed
5. **Diamond Trade** — Diamond themed
6. **City images** — Coimbatore, Mumbai, Kuala Lumpur, USA skylines
7. **About section** — Professional corporate imagery
8. **OG Image** — Social sharing preview image

---

## Verification Plan

### Automated Tests
```bash
npm run build    # Verify successful production build
npm run lint     # Check for lint errors
```

### Manual Verification
- Run `npm run dev` and visually inspect all pages
- Test responsive design at mobile/tablet/desktop breakpoints
- Verify all scroll animations trigger correctly
- Check bilingual content renders properly (English + Tamil)
- Validate SEO metadata in browser dev tools
- Test all navigation links and CTAs
- Verify WhatsApp float button works
- Check Core Web Vitals via Lighthouse
