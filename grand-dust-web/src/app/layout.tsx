import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://granddustglobal.com"),
  title: {
    default: "Grand Dust Global Ventures | Best Financial Advisory & Real Estate in Coimbatore",
    template: "%s | Grand Dust Global Ventures",
  },
  description:
    "Grand Dust Global Ventures — The World's Most Elite Financial Advisory. Best real estate company in Coimbatore offering loans against property, gold & silver operations, diamond trade, and land transactions across India, Malaysia & USA.",
  keywords: [
    "best real estate company coimbatore",
    "best gold loan in coimbatore",
    "best land mortgage loan",
    "loan against property coimbatore",
    "property mortgage loan coimbatore",
    "diamond trade india",
    "gold jewelry coimbatore",
    "Grand Dust Global Ventures",
    "financial advisory coimbatore",
    "gold pledge coimbatore",
    "real estate coimbatore",
    "land buying selling coimbatore",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://granddustglobal.com",
    siteName: "Grand Dust Global Ventures",
    title: "Grand Dust Global Ventures | Elite Financial Advisory",
    description:
      "Empowering your wealth with trusted financial solutions. Loans, real estate, precious metals & diamonds — all under one roof.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Grand Dust Global Ventures Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Dust Global Ventures | Elite Financial Advisory",
    description:
      "Best real estate, gold loan, and financial advisory services in Coimbatore. Global presence in India, Malaysia & USA.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://granddustglobal.com",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://granddustglobal.com/#organization",
      name: "Grand Dust Global Ventures",
      alternateName: "Grand Dust",
      url: "https://granddustglobal.com",
      logo: {
        "@type": "ImageObject",
        url: "https://granddustglobal.com/images/logo.png",
      },
      description:
        "The World's Most Elite Financial Advisory — offering loans against property, real estate transactions, gold & silver operations, and diamond trade across India, Malaysia & USA.",
      founder: {
        "@type": "Person",
        name: "Guruprasad",
        jobTitle: "Founder & Chairman",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9043425551",
          contactType: "customer service",
          email: "guru25551@gmail.com",
          areaServed: ["IN", "MY", "US"],
          availableLanguage: ["English", "Tamil"],
        },
      ],
      sameAs: [],
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "Coimbatore",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Kuala Lumpur",
          addressCountry: "MY",
        },
        {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://granddustglobal.com/#website",
      url: "https://granddustglobal.com",
      name: "Grand Dust Global Ventures",
      description: "The World's Most Elite Financial Advisory",
      publisher: {
        "@id": "https://granddustglobal.com/#organization",
      },
      inLanguage: ["en", "ta"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://granddustglobal.com/#localbusiness",
      name: "Grand Dust Global Ventures",
      image: "https://granddustglobal.com/images/logo.png",
      telephone: "+91-9043425551",
      email: "guru25551@gmail.com",
      url: "https://granddustglobal.com",
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.0168,
        longitude: 76.9558,
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Malaysia" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: [
        "Financial Advisory",
        "Loan Against Property",
        "Real Estate Transactions",
        "Gold & Silver Operations",
        "Diamond Trade",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${notoTamil.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
