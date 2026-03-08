import { Metadata } from "next";
import ClientLayout from "../client-layout";
import "../../styles/index.css";
import { getMessages } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const messages = await getMessages(params.lang);
  const t = messages.Index;

  return {
    metadataBase: new URL("https://adowise.in"),
    title: {
      default: t.title,
      template: `%s | ${t.title}`,
    },
    description: t.description,
    keywords: [
      "top IT agency in the world",
      "best SaaS development company globally",
      "AI automation services for enterprises",
      "premier web development agency",
      "high-performance ecommerce solutions",
      "global digital transformation agency",
      "expert Next.js developers for hire",
      "moltbot",
      "clawd bot",
      "Agentic AI experts",
      "Generative AI solutions",
      "Sora AI video production",
      "RAG architecture for enterprise",
      "Prompt Engineering services",
      "SpaceX Starship tech partners",
      "Artemis mission software",
      "Creator economy platforms",
      "DeFi development",
      "Carbon capture tech solutions",
      "Quantum machine learning",
      "Edge AI for IoT",
      "Short-form video strategy",
      "Brat summer web design",
      "Quiet luxury digital agency",
      "Digital nomad tech support",
      "trending tech agency 2026",
    ],
    authors: [{ name: "Adowise Team", url: "https://adowise.in" }],
    creator: "Adowise",
    publisher: "Adowise",
    openGraph: {
      type: "website",
      locale: params.lang === "hi" ? "hi_IN" : "en_US",
      url: `https://adowise.in/${params.lang}`,
      title: t.title,
      description: t.description,
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
      title: t.title,
      description: t.description,
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
      canonical: `https://adowise.in/${params.lang}`,
      languages: {
        "en-US": "https://adowise.in/en",
        "hi-IN": "https://adowise.in/hi",
        "es-ES": "https://adowise.in/es",
        "fr-FR": "https://adowise.in/fr",
        "de-DE": "https://adowise.in/de",
        "ar-SA": "https://adowise.in/ar",
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html suppressHydrationWarning lang={params.lang}>
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

