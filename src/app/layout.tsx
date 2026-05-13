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
  description: "Building the next generation of growth engines. Specialist in AI integration, software excellence, and enterprise-grade outbound solutions.",
  keywords: ["AI Integration", "Software Excellence", "Enterprise Sales", "Adowise Intelligence", "Growth Engine"],
  authors: [{ name: "Mohammad Altaf" }],
  creator: "Mohammad Altaf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adowise.com",
    siteName: "Adowise",
    title: "Adowise — Software Excellence & AI Intelligence",
    description: "Building the next generation of growth engines. Specialist in AI integration, software excellence, and enterprise-grade outbound solutions.",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Adowise Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adowise — Software Excellence & AI Intelligence",
    description: "Building the next generation of growth engines. Specialist in AI integration, software excellence, and enterprise-grade outbound solutions.",
    images: ["/og-image.png"],
    creator: "@adowise", // Update with actual handle
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

