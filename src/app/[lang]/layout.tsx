import { Metadata } from "next";
import ClientLayout from "../client-layout";
import "../../styles/index.css";
import { getMessages } from "@/lib/i18n";

const baseUrl = "https://adowise.com";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.SEO || messages.Index; // Fallback to Index if SEO not found

  const defaultTitle = "Adowise | Premier Web Development & AI Agency";
  const currentTitle = t.title || defaultTitle;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: currentTitle,
      template: `%s | ${currentTitle}`,
    },
    description: t.description || "Adowise is a world-class IT agency specializing in Next.js development, AI SaaS products, and global digital transformation.",
    keywords: t.keywords || "web development agency, SaaS development, AI automation, Moltbot, Claude Bot, Agentic AI, Next.js experts, React development, enterprise software, digital transformation",
    authors: [{ name: "Adowise Team", url: baseUrl }],
    creator: "Adowise",
    publisher: "Adowise",
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "x-default": `${baseUrl}/en`,
        "en": `${baseUrl}/en`,
        "hi": `${baseUrl}/hi`,
        "es": `${baseUrl}/es`,
        "fr": `${baseUrl}/fr`,
        "de": `${baseUrl}/de`,
        "ar": `${baseUrl}/ar`,
        "ur": `${baseUrl}/ur`,
      },
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: `${baseUrl}/${lang}`,
      title: t.og_title || t.title || defaultTitle,
      description: t.description,
      siteName: "Adowise",
      images: [
        {
          url: `${baseUrl}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.og_title || t.title,
      description: t.og_description || t.description,
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
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.SEO || messages.Index;

  const isRTL = lang === "ar" || lang === "ur";

  return (
    <html suppressHydrationWarning lang={lang} dir={isRTL ? "rtl" : "ltr"}>
      <head>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3458165392588157"
          crossOrigin="anonymous"></script>
        <meta name="google-site-verification" content="gnyXYa0wMDAg0hVNMlPuSOBJ-rq0UihIFxtP-VxNP6k" />
        <meta name="google-site-verification" content="kT-1luXxiutKhXyMPkI7ark0EM9GCc5jajafIVrpi7A" />
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
                "@type": "Organization",
                "name": "Adowise",
                "alternateName": "Adowise IT Agency",
                "url": baseUrl,
                "logo": `${baseUrl}/adowise-logo.png`,
                "image": `${baseUrl}/images/og-image.png`,
                "description": "Adowise is a world-class IT agency specializing in Next.js development, AI SaaS products, and global digital transformation.",
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
                  "availableLanguage": ["English", "Hindi", "Spanish", "French", "German", "Arabic", "Urdu"]
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
                "url": baseUrl,
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": `${baseUrl}/search?q={search_term_string}`,
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Moltbot",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              }
            ])
          }}
        />
      </head>
      <ClientLayout lang={lang} messages={messages}>{children}</ClientLayout>
    </html>
  );
}

