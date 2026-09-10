import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adowise.mohammdaltaf.dev"),
  title: {
    default: "Adowise Labs — Software, SaaS & AI Solutions from Paonta Sahib | Founded by Mohd Altaf",
    template: "%s | Adowise Labs — Paonta Sahib",
  },
  description: "Adowise Labs is a software, SaaS & AI company from Paonta Sahib, Himachal Pradesh — founded by Mohd Altaf. We build websites, web apps, SaaS products, AI automation, education software, business systems, ERP, CRM & deliver SEO, digital marketing & Google Ads for businesses across Paonta Sahib, Himachal Pradesh & India.",
  keywords: [
    // === LOCAL SEO: Paonta Sahib ===
    "web developer Paonta Sahib",
    "web development Paonta Sahib",
    "website development Paonta Sahib",
    "software company Paonta Sahib",
    "software development Paonta Sahib",
    "SaaS development Paonta Sahib",
    "AI development Paonta Sahib",
    "AI automation Paonta Sahib",
    "SEO Paonta Sahib",
    "digital marketing Paonta Sahib",
    "Google Ads Paonta Sahib",
    "social media marketing Paonta Sahib",
    "e-commerce development Paonta Sahib",
    "business automation Paonta Sahib",
    "mobile app development Paonta Sahib",
    "IT company Paonta Sahib",
    "IT consulting Paonta Sahib",
    "technology company Paonta Sahib",
    "best web developer in Paonta Sahib",
    "top software company Paonta Sahib",
    "website design Paonta Sahib",
    "graphic design Paonta Sahib",
    // === LOCAL SEO: Industry Pages ===
    "websites for restaurants Paonta Sahib",
    "websites for hotels Paonta Sahib",
    "websites for manufacturers Paonta Sahib",
    "websites for clinics Paonta Sahib",
    "websites for schools Paonta Sahib",
    "websites for local businesses Paonta Sahib",
    "websites for real estate Paonta Sahib",
    "websites for gyms Paonta Sahib",
    "online store Paonta Sahib",
    // === HIMACHAL PRADESH ===
    "software company Himachal Pradesh",
    "web developer Himachal Pradesh",
    "AI company Himachal Pradesh",
    "SaaS company Himachal Pradesh",
    "digital marketing Himachal Pradesh",
    "IT company Himachal Pradesh",
    "best web developer Himachal Pradesh",
    // === INDIA-WIDE ===
    "AI software India",
    "SaaS development India",
    "education software India",
    "school management software India",
    "business software India",
    "ERP software India",
    "CRM software India",
    "AI automation company India",
    "custom software development India",
    "web application development India",
    // === TECHNOLOGY ===
    "website development",
    "web applications",
    "mobile apps",
    "SaaS development",
    "custom software",
    "ERP",
    "CRM",
    "POS",
    "business management software",
    "cloud software",
    "API development",
    "database systems",
    "IT consulting",
    // === AI ===
    "AI software",
    "AI agents",
    "AI automation",
    "AI chatbots",
    "AI customer support",
    "AI marketing",
    "AI content systems",
    "AI business tools",
    "AI integrations",
    "custom AI solutions",
    "OpenAI integrations",
    // === EDUCATION SOFTWARE ===
    "school management software",
    "college management software",
    "coaching management software",
    "LMS",
    "learning management system",
    "online course platform",
    "student portal",
    "parent portal",
    "attendance system",
    "fee management system",
    "examination system",
    "admission system",
    "digital classroom",
    "education ERP",
    // === BUSINESS SOFTWARE ===
    "manufacturing ERP",
    "inventory management",
    "billing software",
    "accounting software",
    "HR payroll software",
    "lead management",
    "appointment system",
    "booking software",
    "restaurant software",
    "hotel software",
    "clinic software",
    "hospital software",
    "real estate CRM",
    "logistics software",
    "retail POS",
    // === DIGITAL GROWTH ===
    "SEO",
    "local SEO",
    "Google Business Profile",
    "Google Ads",
    "social media marketing",
    "performance marketing",
    "content marketing",
    "conversion optimization",
    "branding",
    "digital strategy",
    // === BRAND: Adowise Labs ===
    "Adowise Labs",
    "Adowise",
    "adowise.com",
    "adowise ai",
    "adowise labs Paonta Sahib",
    // === BRAND: Mohd Altaf ===
    "Mohd Altaf",
    "Mohammad Altaf",
    "Mohd Altaf Paonta Sahib",
    "Mohd Altaf web developer",
    "Mohd Altaf software developer",
    "Mohd Altaf founder Adowise Labs",
    // === MISSPELLINGS ===
    "adwise",
    "adwice",
    "addwise",
    "adwize",
    "adovise",
    "adowse",
    "adowize",
    "Paonta Sahib",
    "paonta sahib",
    "ponta sahib",
    "paunta sahib",
  ],
  authors: [{ name: "Mohd Altaf", url: "https://mohammdaltaf.dev" }],
  creator: "Mohd Altaf",
  publisher: "Adowise Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: [
      "RRzkG8R3JztdNBDLC-cD9WLIp_e3xhLF20tlenVvlv0",
      "OsUkDaYOREirNLHuQSYJXD_G6Ryuco34vcIig97KkHA",
    ],
  },
  alternates: {
    canonical: "https://adowise.mohammdaltaf.dev",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adowise.mohammdaltaf.dev",
    siteName: "Adowise Labs",
    title: "Adowise Labs — Software, SaaS & AI Solutions from Paonta Sahib",
    description: "Founded by Mohd Altaf in Paonta Sahib. We build websites, SaaS products, AI automation, education software, business systems & deliver SEO, digital marketing & Google Ads for businesses across Paonta Sahib, Himachal Pradesh & India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adowise Labs — Software, SaaS & AI Solutions from Paonta Sahib | Founded by Mohd Altaf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adowise Labs — Software, SaaS & AI Solutions from Paonta Sahib",
    description: "Founded by Mohd Altaf. We build websites, SaaS products, AI automation, education software, business systems & deliver SEO, digital marketing & Google Ads.",
    images: ["/og-image.png"],
    creator: "@adowise",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${instrument.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="OsUkDaYOREirNLHuQSYJXD_G6Ryuco34vcIig97KkHA" />
        {/* JSON-LD: LocalBusiness — Adowise Labs in Paonta Sahib */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://adowise.mohammdaltaf.dev/#organization",
              "name": "Adowise Labs",
              "alternateName": "Adowise",
              "url": "https://adowise.mohammdaltaf.dev",
              "logo": "https://adowise.mohammdaltaf.dev/logo.png",
              "image": "https://adowise.mohammdaltaf.dev/og-image.png",
              "description": "Software, SaaS & AI company from Paonta Sahib, Himachal Pradesh. We build websites, web apps, SaaS products, AI automation, education software, business systems, ERP, CRM and deliver SEO, digital marketing & Google Ads.",
              "founder": {
                "@type": "Person",
                "name": "Mohd Altaf",
                "alternateName": "Mohammad Altaf",
                "url": "https://mohammdaltaf.dev",
                "jobTitle": "Founder & CEO"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paonta Sahib",
                "addressRegion": "Himachal Pradesh",
                "postalCode": "173025",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.4367",
                "longitude": "77.6246"
              },
              "areaServed": ["Paonta Sahib", "Sirmaur District", "Himachal Pradesh", "India"],
              "sameAs": [
                "https://twitter.com/adowise",
                "https://linkedin.com/company/adowise",
                "https://adowise.com",
                "https://mohammdaltaf.dev"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info.adowise@gmail.com",
                "contactType": "customer service"
              },
              "priceRange": "$$"
            })
          }}
        />
        {/* JSON-LD: Person — Mohammad Altaf, Full Stack Web Developer in Paonta Sahib */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohammad Altaf",
              "alternateName": ["Mohd Altaf", "Mohammad Altaf Paonta Sahib"],
              "url": "https://adowise.mohammdaltaf.dev/#founder-paonta-sahib",
              "image": "https://adowise.mohammdaltaf.dev/founder.png",
              "sameAs": [
                "https://mohammadaltaf.dev",
                "https://adowise.com",
                "https://linkedin.com/in/mohammadaltaf"
              ],
              "jobTitle": "Full Stack Web Developer & Founder",
              "description": "Mohammad Altaf is a Full Stack Web Developer and Software Engineer based in Paonta Sahib, Himachal Pradesh. Founder of Adowise Labs — a software, SaaS & AI company — and creator of Adowise, a creator & expert monetization platform. Also a Software Engineer at Tradylytics.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paonta Sahib",
                "addressRegion": "Himachal Pradesh",
                "postalCode": "173025",
                "addressCountry": "IN"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Adowise Labs",
                  "url": "https://adowise.mohammdaltaf.dev"
                },
                {
                  "@type": "Organization",
                  "name": "Tradylytics"
                }
              ],
              "knowsAbout": [
                "Web Development", "Full Stack Development", "SaaS",
                "AI Automation", "Next.js", "React", "Node.js",
                "Digital Marketing", "SEO", "School Management Software",
                "Hotel Website Development", "Paonta Sahib"
              ]
            })
          }}
        />
        {/* JSON-LD: WebSite — Search Action */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Adowise Labs",
              "url": "https://adowise.mohammdaltaf.dev",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://adowise.mohammdaltaf.dev/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
