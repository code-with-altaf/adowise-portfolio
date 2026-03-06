import { Metadata } from "next";
import ClientLayout from "./client-layout";
import "../styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adowise.in"),
  title: {
    default: "Adowise | Premier Web Development & Digital Agency",
    template: "%s | Adowise",
  },
  description:
    "Adowise is a world-class agency crafting high-performance websites, SaaS platforms, and data-driven digital marketing strategies. Scale your business globally with our top-tier solutions.",
  keywords: [
    "top IT agency in the world",
    "best SaaS development company globally",
    "AI automation services for enterprises",
    "premier web development agency",
    "high-performance ecommerce solutions",
    "global digital transformation agency",
    "expert Next.js developers for hire",
  ],
  authors: [{ name: "Adowise Team", url: "https://adowise.in" }],
  creator: "Adowise",
  publisher: "Adowise",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adowise.in",
    title: "Adowise | Premier Web Development & Digital Agency",
    description:
      "Scale your business globally with our world-class web development, design, and digital marketing services.",
    siteName: "Adowise",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adowise - Premier Web Development & Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adowise | Premier Web Development & Digital Agency",
    description:
      "Scale your business globally with our world-class web development, design, and digital marketing services.",
    images: ["/images/og-image.png"],
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
  alternates: {
    canonical: "https://adowise.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3458165392588157"
          crossOrigin="anonymous"></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WZCLJ6ML2S"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WZCLJ6ML2S');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Adowise",
                "url": "https://adowise.in",
                "logo": "https://adowise.in/adowise-logo.png",
                "image": "https://adowise.in/images/og-image.png",
                "description": "Adowise is the world's premier IT agency crafting high-performance websites, Next.js React SaaS platforms, and enterprise digital marketing solutions. Scale globally with the best developers.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chandigarh",
                  "addressRegion": "Chandigarh",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9882835865",
                  "contactType": "customer service",
                  "areaServed": "Worldwide",
                  "availableLanguage": "en"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/adowise",
                  "https://twitter.com/adowise",
                  "https://www.facebook.com/adowise",
                  "https://www.instagram.com/adowise"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Adowise",
                "url": "https://adowise.in",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://adowise.in/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
      </head>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
