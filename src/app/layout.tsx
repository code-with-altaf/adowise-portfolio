import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://adowise.com"),
  title: {
    default: "Adowise — Software Excellence & AI Intelligence",
    template: "%s | Adowise",
  },
  description: "Adowise builds the next generation of growth engines. Specialist in AI integration, software excellence, and enterprise-grade outbound solutions for founders and sales teams.",
  keywords: [
    "AI Integration", 
    "Software Excellence", 
    "Enterprise Sales", 
    "Adowise Intelligence", 
    "Growth Engine", 
    "Sales Automation", 
    "Lead Generation AI", 
    "Outbound Solutions", 
    "B2B Sales AI",
    // Hidden SEO misspelling variations
    "adwise",
    "adwise.com",
    "adwise digital brain",
    "adwise international agency",
    "adwise ai",
    "adwise visualstraining specialist",
    "adwise.ge",
    "adwice",
    "myadwice.com",
    "myadwice",
    "addwise",
    "adwize",
    "adovise",
    "adowse",
    "adowise ai",
    "adowise.com",
    // 50 Extended Variations
    "ad wise",
    "add wise",
    "ad-wise",
    "adowise agency",
    "adwise agency",
    "adwice agency",
    "adowize",
    "adovise agency",
    "adowise digital",
    "adwise digital",
    "adwise marketing",
    "adowise marketing",
    "adwise consulting",
    "adowise consulting",
    "adowise software",
    "adwise software",
    "adwise tech",
    "adowise tech",
    "adwise technology",
    "adowise technology",
    "myadowise",
    "my adowise",
    "my adwise",
    "adwice digital",
    "adwice ai",
    "adwice.com",
    "adowice",
    "adowice.com",
    "adowice ai",
    "adowise solutions",
    "adwise solutions",
    "adowise inc",
    "adwise inc",
    "adowise llc",
    "adwise llc",
    "adowise official",
    "adwise official",
    "adwise international",
    "adowise international",
    "adwise brain",
    "adowise brain",
    "adowise visuals",
    "adwise visuals",
    "adwise training",
    "adowise training",
    "adowise specialist",
    "adwise specialist",
    "adwise website",
    "adowise website",
    "ad wise ai",
    "ad-wise ai",
    "adwise b2b",
    "adowise b2b",
    "adwise web design",
    "adowise web design"
  ],
  authors: [{ name: "Mohammad Altaf" }],
  creator: "Mohammad Altaf",
  publisher: "Adowise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://adowise.com",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adowise.com",
    siteName: "Adowise",
    title: "Adowise — Software Excellence & AI Intelligence",
    description: "Building the next generation of growth engines. Specialist in AI integration, software excellence, and enterprise-grade outbound solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adowise Intelligence - Software Excellence & AI Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adowise — Software Excellence & AI Intelligence",
    description: "Building the next generation of growth engines. Specialist in AI integration, software excellence, and enterprise-grade outbound solutions.",
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

import { Toaster } from "sonner";

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
        {/* JSON-LD Structured Data for Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Adowise",
              "url": "https://adowise.com",
              "logo": "https://adowise.com/logo.png",
              "sameAs": [
                "https://twitter.com/adowise",
                "https://linkedin.com/company/adowise"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info.adowise@gmail.com",
                "contactType": "customer service"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Adowise",
              "url": "https://adowise.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://adowise.com/blog?q={search_term_string}",
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

