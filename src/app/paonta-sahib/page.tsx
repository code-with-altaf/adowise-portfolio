import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Developer in Paonta Sahib | Adowise Labs",
  description:
    "Looking for a website developer in Paonta Sahib? Adowise Labs builds professional websites, web apps, school software, hotel booking systems, and AI automation for businesses in Paonta Sahib, Sirmaur, Himachal Pradesh.",
  keywords: [
    "website developer in paonta sahib",
    "web developer paonta sahib",
    "website design paonta sahib",
    "best web developer paonta sahib",
    "software company paonta sahib",
    "digital marketing paonta sahib",
    "SEO paonta sahib",
    "school software paonta sahib",
    "hotel website paonta sahib",
    "Adowise Labs paonta sahib",
    "mohd altaf paonta sahib",
  ],
  openGraph: {
    title: "Website Developer in Paonta Sahib | Adowise Labs",
    description:
      "Adowise Labs is the top software, SaaS & AI company based in Paonta Sahib. We build websites, school management software, hotel booking systems, and AI automation.",
    url: "https://adowise.mohammdaltaf.dev/paonta-sahib",
    type: "website",
  },
};

const services = [
  {
    icon: "🏫",
    title: "School Management Software",
    desc: "Complete ERP for schools — attendance, fees, exams, parent portal, online admissions. Built for GNMPS, The Scholars' Home, and every school in Paonta Sahib.",
    keywords: ["school software paonta sahib", "school management paonta sahib"],
    href: "/paonta-sahib/schools",
  },
  {
    icon: "🏨",
    title: "Hotel & Resort Websites",
    desc: "Professional booking websites for hotels near Gurudwara Paonta Sahib. Direct bookings, room management, Google reviews integration. Capture tourist traffic.",
    keywords: ["hotel website paonta sahib", "hotel booking system paonta sahib"],
    href: "/paonta-sahib/hotels",
  },
  {
    icon: "🌐",
    title: "Business Websites",
    desc: "Mobile-responsive websites for any business in Paonta Sahib. Rank on Google, get more customers. From ₹15,000 with SEO included.",
    keywords: ["business website paonta sahib"],
    href: "/paonta-sahib/websites",
  },
  {
    icon: "📱",
    title: "Social Media & Digital Marketing",
    desc: "Instagram management, Facebook ads, Google Ads, and local SEO for Paonta Sahib businesses. Get found online. Grow your customer base.",
    keywords: ["digital marketing paonta sahib", "social media marketing paonta sahib"],
    href: "/paonta-sahib/digital-marketing",
  },
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "AI chatbots, Instagram comment-to-DM automation, appointment booking, lead management. Save hours every day with smart automation.",
    keywords: ["AI automation paonta sahib"],
    href: "/paonta-sahib/ai-automation",
  },
  {
    icon: "🏥",
    title: "Healthcare & Clinic Software",
    desc: "Appointment booking systems, patient portals, doctor profiles. Perfect for clinics and hospitals in Paonta Sahib looking to go digital.",
    keywords: ["clinic software paonta sahib", "hospital website paonta sahib"],
    href: "/paonta-sahib/healthcare",
  },
];

const competitors = [
  { name: "SNM Web Developer", rating: "4.7★", reviews: "3 reviews", weakness: "Very few reviews, limited services" },
  { name: "Geometrical Web", rating: "5.0★", reviews: "25 reviews", weakness: "WordPress only, no AI/SaaS capability" },
  { name: "DigiWorld India", rating: "5.0★", reviews: "37 reviews", weakness: "Focus on social media, not custom software" },
];

export default function PaontaSahibPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-[120px] pb-[80px] px-4 lg:px-8 overflow-hidden bg-gradient-to-br from-[#fff9f3] to-[#f3ece0]">
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4d9c3] text-[#b8541e] font-mono text-[10px] tracking-[0.15em] font-medium mb-8 uppercase">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#d9692a] animate-pulse" />
            Paonta Sahib · Sirmaur · Himachal Pradesh
          </div>
          <h1 className="font-display italic text-[clamp(36px,6vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-[#1f1b16] mb-6">
            Website Developer<br />
            in <span className="text-[#d9692a]">Paonta Sahib</span>
          </h1>
          <p className="text-[20px] text-[#4a413a] max-w-[700px] leading-relaxed mb-10">
            <strong>Adowise Labs</strong> is the leading software, SaaS & AI company based right here in Paonta Sahib. We build websites, school management software, hotel booking systems, and AI automation for businesses across Sirmaur district and Himachal Pradesh.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi, I need a website for my business in Paonta Sahib"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#d9692a] text-white rounded-full font-semibold text-[16px] hover:bg-[#c45a1f] transition-colors"
            >
              📞 Get Free Consultation
            </a>
            <Link
              href="/blog"
              className="px-8 py-4 border-2 border-[#d9692a] text-[#d9692a] rounded-full font-semibold text-[16px] hover:bg-[#f4d9c3] transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Why We're Different from Competitors */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display italic text-[clamp(28px,4vw,48px)] font-light text-[#1f1b16] mb-4">
            Why choose <span className="text-[#d9692a]">Adowise Labs</span>?
          </h2>
          <p className="text-[18px] text-[#4a413a] mb-12 max-w-[600px]">
            There are a few web companies in Paonta Sahib. Here&apos;s what makes us different:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Competitors */}
            <div className="rounded-[20px] border border-[#e1d7c5] p-8 bg-[#fdf9f4]">
              <h3 className="font-semibold text-[20px] text-[#1f1b16] mb-6">Other options in Paonta Sahib</h3>
              <div className="space-y-4">
                {competitors.map((c) => (
                  <div key={c.name} className="flex flex-col gap-1 pb-4 border-b border-[#e1d7c5] last:border-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#1f1b16]">{c.name}</span>
                      <span className="text-[14px] text-[#8a7f72]">{c.rating} · {c.reviews}</span>
                    </div>
                    <span className="text-[14px] text-[#e05a2b]">⚠ {c.weakness}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Adowise Labs */}
            <div className="rounded-[20px] border-2 border-[#d9692a] p-8 bg-[#fff9f3]">
              <h3 className="font-semibold text-[20px] text-[#d9692a] mb-6">Adowise Labs</h3>
              <div className="space-y-3">
                {[
                  "Full-stack: websites, apps, SaaS, AI, SEO, ads",
                  "Built our own product (Adowise.com) — we know product",
                  "Local to Paonta Sahib — meet in person anytime",
                  "Modern tech stack (Next.js, React, AI, Cloud)",
                  "School software, hotel systems, custom ERP",
                  "Transparent pricing from ₹15,000",
                  "Ongoing support & maintenance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#d9692a] font-bold mt-0.5">✓</span>
                    <span className="text-[#4a413a]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 lg:px-8 bg-[#f3ece0]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display italic text-[clamp(28px,4vw,48px)] font-light text-[#1f1b16] mb-4">
            Our services in <span className="text-[#d9692a]">Paonta Sahib</span>
          </h2>
          <p className="text-[18px] text-[#4a413a] mb-12">
            From simple websites to complex school management software — we build it all.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-[20px] p-8 border border-[#e1d7c5] hover:border-[#d9692a] transition-colors group">
                <div className="text-[40px] mb-4">{s.icon}</div>
                <h3 className="font-semibold text-[20px] text-[#1f1b16] mb-3 group-hover:text-[#d9692a] transition-colors">{s.title}</h3>
                <p className="text-[15px] text-[#4a413a] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Targets - Schools & Hotels */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display italic text-[clamp(28px,4vw,48px)] font-light text-[#1f1b16] mb-12">
            Who we serve in <span className="text-[#d9692a]">Paonta Sahib</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                emoji: "🏫",
                title: "Schools & Colleges",
                desc: "From The Scholars' Home to GNMPS to private coaching centres — every educational institution in Paonta Sahib needs a school management system, parent portal, and professional website.",
                cta: "School Software →",
                href: "/paonta-sahib/schools",
              },
              {
                emoji: "🏨",
                title: "Hotels & Resorts",
                desc: "Thousands of pilgrims visit Gurudwara Paonta Sahib every month. Hotels near the Gurudwara need booking websites to capture this traffic directly without paying OTA commissions.",
                cta: "Hotel Solutions →",
                href: "/paonta-sahib/hotels",
              },
              {
                emoji: "🏥",
                title: "Clinics & Hospitals",
                desc: "Paonta Sahib's healthcare sector is growing. Clinics need online appointment booking, doctor profiles, patient reviews, and a mobile-friendly website.",
                cta: "Healthcare Software →",
                href: "/paonta-sahib/healthcare",
              },
              {
                emoji: "🏪",
                title: "Shops & Retail Businesses",
                desc: "Every shop in Paonta Sahib — from electronics to clothing to furniture — needs a Google Business Profile, website, and WhatsApp integration to compete in 2026.",
                cta: "Business Website →",
                href: "/paonta-sahib/websites",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[20px] border border-[#e1d7c5] p-8 hover:border-[#d9692a] transition-colors">
                <div className="text-[40px] mb-4">{item.emoji}</div>
                <h3 className="font-semibold text-[22px] text-[#1f1b16] mb-3">{item.title}</h3>
                <p className="text-[16px] text-[#4a413a] leading-relaxed mb-6">{item.desc}</p>
                <span className="text-[#d9692a] font-semibold text-[15px]">{item.cta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Adowise Labs — Website Developer in Paonta Sahib",
            "url": "https://adowise.mohammdaltaf.dev/paonta-sahib",
            "description": "Best website developer and software company in Paonta Sahib, Himachal Pradesh. We build websites, school management software, hotel booking systems, and AI automation.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paonta Sahib",
              "addressRegion": "Himachal Pradesh",
              "postalCode": "173025",
              "addressCountry": "IN"
            },
            "areaServed": [
              "Paonta Sahib", "Sirmaur District", "Himachal Pradesh"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services for Paonta Sahib",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development Paonta Sahib" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "School Management Software Paonta Sahib" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hotel Booking Website Paonta Sahib" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing Paonta Sahib" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation Paonta Sahib" } },
              ]
            },
            "founder": {
              "@type": "Person",
              "name": "Mohd Altaf",
              "url": "https://altaf.adowise.com"
            }
          })
        }}
      />

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8 bg-[#1f1b16] text-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-display italic text-[clamp(28px,4vw,48px)] font-light mb-6">
            Ready to go digital in <span className="text-[#d9692a]">Paonta Sahib?</span>
          </h2>
          <p className="text-[18px] text-[#a89d8e] mb-10">
            Free consultation. No commitment. We&apos;re local — let&apos;s meet and discuss your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#d9692a] text-white rounded-full font-semibold hover:bg-[#c45a1f] transition-colors"
            >
              WhatsApp Us Now
            </a>
            <Link
              href="/blog/best-web-development-company-paonta-sahib"
              className="px-8 py-4 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
