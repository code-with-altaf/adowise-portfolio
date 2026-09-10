import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO Paonta Sahib | Adowise Labs",
  description:
    "Best digital marketing agency in Paonta Sahib — SEO, Google Ads, social media marketing, Instagram management, Facebook Ads for local businesses. Adowise Labs, Sirmaur, Himachal Pradesh.",
  keywords: [
    "digital marketing paonta sahib",
    "SEO paonta sahib",
    "Google Ads paonta sahib",
    "social media marketing paonta sahib",
    "Instagram marketing paonta sahib",
    "Facebook Ads paonta sahib",
    "digital marketing agency sirmaur",
    "best digital marketing paonta sahib",
    "online marketing paonta sahib",
    "content marketing paonta sahib",
  ],
  openGraph: {
    title: "Digital Marketing & SEO Agency — Paonta Sahib",
    description:
      "SEO, Google Ads, social media marketing for businesses in Paonta Sahib. Get found on Google. Grow your customers. Adowise Labs.",
    url: "https://adowise.mohammdaltaf.dev/paonta-sahib/digital-marketing",
  },
};

const services = [
  { icon: "🔍", title: "Local SEO", desc: "Rank on Google for 'your business + Paonta Sahib' searches. We optimize your website, Google Business Profile, and build local backlinks.", result: "Appear on Google Page 1" },
  { icon: "📣", title: "Google Ads", desc: "Pay-per-click campaigns that put your business at the top of Google search results immediately. Only pay when someone clicks.", result: "Instant Google visibility" },
  { icon: "📱", title: "Instagram Marketing", desc: "Content creation, posting, hashtag strategy, reel production, and engagement management for Instagram.", result: "More followers & inquiries" },
  { icon: "👍", title: "Facebook Ads", desc: "Targeted Facebook and Instagram ad campaigns for Paonta Sahib audiences. Reach locals, tourists, pilgrims.", result: "Targeted local audience" },
  { icon: "📊", title: "Google Business Profile", desc: "Set up and optimize your Google Maps listing. Get 5-star reviews. Appear in 'near me' searches for Paonta Sahib.", result: "Show up on Google Maps" },
  { icon: "✍️", title: "Content Marketing", desc: "Blog posts, articles, and website content that rank on Google and educate your potential customers.", result: "Organic traffic growth" },
];

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-[120px] pb-[80px] px-4 lg:px-8 bg-gradient-to-br from-[#0d1a0d] to-[#1a3d1a]">
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c3f0c3]/20 text-[#c3f0c3] font-mono text-[10px] tracking-[0.15em] font-medium mb-8 uppercase">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#4caf50] animate-pulse" />
            SEO · Google Ads · Social Media · Paonta Sahib
          </div>
          <h1 className="font-display italic text-[clamp(36px,6vw,68px)] font-light leading-[1.05] tracking-[-0.03em] text-white mb-6">
            Digital Marketing Agency<br />
            in <span className="text-[#4caf50]">Paonta Sahib</span>
          </h1>
          <p className="text-[20px] text-[#a8d5a8] max-w-[700px] leading-relaxed mb-10">
            <strong className="text-white">Adowise Labs</strong> is the top digital marketing agency based in Paonta Sahib. We help local businesses get found on Google, grow on Instagram, and run profitable Google Ads and Facebook Ads campaigns.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi, I need digital marketing services for my business in Paonta Sahib"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#4caf50] text-white rounded-full font-semibold text-[16px] hover:bg-[#388e3c] transition-colors"
            >
              Get Free Consultation
            </a>
            <Link href="/paonta-sahib" className="px-8 py-4 border border-white/30 text-white rounded-full font-semibold text-[16px] hover:bg-white/10 transition-colors">
              All Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display italic text-[clamp(24px,3.5vw,42px)] font-light text-[#0d1b0d] mb-12">
            Our digital marketing <span className="text-[#4caf50]">services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-[20px] border border-[#c8e6c9] p-8 hover:border-[#4caf50] transition-colors bg-[#f9fff9]">
                <div className="text-[40px] mb-4">{s.icon}</div>
                <h3 className="font-semibold text-[20px] text-[#0d1b0d] mb-3">{s.title}</h3>
                <p className="text-[15px] text-[#2d4a2d] leading-relaxed mb-4">{s.desc}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8e6c9] text-[#2e7d32] text-[12px] font-semibold">
                  → {s.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-[#f1f8f1]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-display italic text-[clamp(24px,3.5vw,42px)] font-light text-[#0d1b0d] mb-8">
            Pricing for Paonta Sahib businesses
          </h2>
          <div className="space-y-4">
            {[
              { service: "SEO (Local)", price: "₹8,000/month", desc: "Google rankings for Paonta Sahib searches" },
              { service: "Google Ads Management", price: "₹5,000/month + ad spend", desc: "Ad spend minimum ₹5,000/month" },
              { service: "Social Media Management", price: "₹7,000/month", desc: "Instagram + Facebook, 12 posts/month" },
              { service: "Google Business Profile Setup", price: "₹3,000 one-time", desc: "Setup + optimization + review strategy" },
              { service: "Full Digital Package", price: "₹15,000/month", desc: "SEO + Social Media + Google Ads management" },
            ].map((row) => (
              <div key={row.service} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-[16px] bg-white border border-[#c8e6c9]">
                <div>
                  <div className="font-semibold text-[#0d1b0d]">{row.service}</div>
                  <div className="text-[13px] text-[#4a6a4a]">{row.desc}</div>
                </div>
                <div className="font-bold text-[#4caf50] text-[18px] mt-2 md:mt-0 whitespace-nowrap">{row.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MarketingAgency",
            "name": "Adowise Labs — Digital Marketing Agency Paonta Sahib",
            "description": "Best digital marketing agency in Paonta Sahib offering SEO, Google Ads, social media marketing.",
            "url": "https://adowise.mohammdaltaf.dev/paonta-sahib/digital-marketing",
            "address": { "@type": "PostalAddress", "addressLocality": "Paonta Sahib", "addressRegion": "Himachal Pradesh", "addressCountry": "IN" },
            "areaServed": "Paonta Sahib, Sirmaur, Himachal Pradesh",
          })
        }}
      />

      <section className="py-20 px-4 lg:px-8 bg-[#0d1a0d] text-white">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-display italic text-[clamp(28px,4vw,42px)] font-light mb-6">
            Ready to grow your business online in <span className="text-[#4caf50]">Paonta Sahib?</span>
          </h2>
          <p className="text-[18px] text-[#a8d5a8] mb-10">Free audit of your current online presence. No commitment.</p>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#4caf50] text-white rounded-full font-semibold hover:bg-[#388e3c] transition-colors inline-block">
            WhatsApp for Free Audit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
