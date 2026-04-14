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
    verification: {
      other: {
        "msvalidate.01": "75F97E946295F0C276DFEB58BF39EB2A",
        "google-adsense-account": "ca-pub-3458165392588157",
      },
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3458165392588157"
          crossOrigin="anonymous"
        ></script>
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
                "@type": "Person",
                "name": "Mohammad Altaf",
                "url": "https://www.linkedin.com/in/reachmohdaltaf/",
                "image": "https://media.licdn.com/dms/image/v2/D5603AQH6vX8lVgE4Jw/profile-displayphoto-scale_400_400/B56ZzZfhRKIkAg-/0/1773175449229?e=1777507200&v=beta&t=CmuyLlecdwDn82EvkgqqbR80Fwyff7kmYDiJadvEoZs",
                "jobTitle": "Founder & Full-Stack Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Adowise"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Paonta Sahib",
                  "addressRegion": "Himachal Pradesh",
                  "addressCountry": "IN"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/reachmohdaltaf/",
                  "https://twitter.com/reachmohdaltaf",
                  "https://github.com/reachmohdaltaf"
                ],
                "description": "Mohammad Altaf is a professional full-stack web developer and the founder of Adowise, specializing in real estate portals and SaaS solutions in Paonta Sahib, Himachal Pradesh."
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Adowise",
                "alternateName": "Adowise IT Agency",
                "url": baseUrl,
                "logo": `${baseUrl}/adowise-logo.png`,
                "image": "https://media.licdn.com/dms/image/v2/D5603AQH6vX8lVgE4Jw/profile-displayphoto-scale_400_400/B56ZzZfhRKIkAg-/0/1773175449229?e=1777507200&v=beta&t=CmuyLlecdwDn82EvkgqqbR80Fwyff7kmYDiJadvEoZs",
                "description": "Adowise, founded by Mohammad Altaf, is a world-class IT agency in Paonta Sahib specializing in custom web development.",
                "founder": {
                  "@type": "Person",
                  "name": "Mohammad Altaf"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Paonta Sahib",
                  "addressRegion": "Himachal Pradesh",
                  "addressCountry": "IN"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/adowise",
                  "https://twitter.com/adowise"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Adowise - Mohammad Altaf",
                "url": baseUrl
              }
            ])
          }}
        />
      </head>
      <ClientLayout lang={lang} messages={messages}>{children}</ClientLayout>
    </html>
  );
}

