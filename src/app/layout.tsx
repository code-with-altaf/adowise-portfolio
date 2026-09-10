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
  metadataBase: new URL("https://adowise.mohammdaltaf.dev"),
  title: {
    default: "Adowise Labs — Creator & Expert Monetization Platform",
    template: "%s | Adowise Labs",
  },
  description: "Adowise Labs — the engine behind Adowise, the all-in-one creator and expert monetization platform. Sell courses, memberships, 1:1 mentorship, digital products, webinars & more. Built-in funnels, referral rewards, and Instagram DM automation to convert your audience into income.",
  keywords: [
    // Core product keywords
    "creator monetization platform",
    "expert monetization",
    "sell digital products",
    "sell online courses",
    "sell memberships",
    "1:1 mentorship platform",
    "paid queries",
    "webinar platform",
    "creator economy",
    "monetize audience",
    "monetize knowledge",
    "creator tools",
    "educator platform",
    "mentor platform",
    // Business features
    "sales funnels for creators",
    "promotional campaigns",
    "referral rewards program",
    "Instagram comment to DM automation",
    "Instagram DM automation",
    "audience monetization",
    "convert followers to customers",
    "creator CRM",
    // Brand keywords
    "Adowise",
    "Adowise Labs",
    "adowise.com",
    "adowise ai",
    "adowise platform",
    "adowise creator",
    "adowise monetization",
    // Misspelling variations
    "adwise",
    "adwice",
    "addwise",
    "adwize",
    "adovise",
    "adowse",
    "adowize",
    "adowice",
    "myadowise",
    "myadwice",
    "ad wise",
    "add wise",
    "ad-wise",
    // Competitor alternatives
    "Gumroad alternative",
    "Teachable alternative",
    "Topmate alternative",
    "Stan Store alternative",
    "Linktree alternative for creators",
    "Kajabi alternative",
    "Podia alternative",
    "all-in-one creator platform",
    "content monetization tool",
    "creator storefront",
  ],
  authors: [{ name: "Mohammad Altaf" }],
  creator: "Mohammad Altaf",
  publisher: "Adowise Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "RRzkG8R3JztdNBDLC-cD9WLIp_e3xhLF20tlenVvlv0",
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
    title: "Adowise Labs — Creator & Expert Monetization Platform",
    description: "The all-in-one platform for creators, experts, mentors & educators to monetize their knowledge. Sell courses, memberships, mentorship, digital products, webinars & more — with built-in funnels, referral rewards, and Instagram DM automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adowise Labs — Creator & Expert Monetization Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adowise Labs — Creator & Expert Monetization Platform",
    description: "The all-in-one platform for creators, experts, mentors & educators to monetize their knowledge. Sell courses, memberships, mentorship, digital products & more.",
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
              "name": "Adowise Labs",
              "url": "https://adowise.mohammdaltaf.dev",
              "logo": "https://adowise.mohammdaltaf.dev/logo.png",
              "description": "Creator and expert monetization platform — sell courses, memberships, mentorship, digital products, webinars and more.",
              "sameAs": [
                "https://twitter.com/adowise",
                "https://linkedin.com/company/adowise",
                "https://adowise.com"
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
        {/* SoftwareApplication Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Adowise",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "All-in-one creator and expert monetization platform. Sell digital products, courses, memberships, 1:1 mentorship, paid queries, webinars, and more. Built-in funnels, referral rewards, and Instagram DM automation.",
              "url": "https://adowise.mohammdaltaf.dev",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
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

