import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel Website & Booking System Paonta Sahib | Adowise Labs",
  description:
    "Professional hotel booking websites for hotels near Gurudwara Paonta Sahib. Capture pilgrim and tourist traffic with direct booking systems. No OTA commissions. Adowise Labs, Paonta Sahib.",
  keywords: [
    "hotel website paonta sahib",
    "hotel booking system paonta sahib",
    "hotel near gurudwara paonta sahib website",
    "resort website paonta sahib",
    "hotel management software paonta sahib",
    "hotel digital marketing paonta sahib",
    "best hotel paonta sahib online booking",
    "hotel SEO paonta sahib",
    "hotel silver oak paonta sahib website",
  ],
  openGraph: {
    title: "Hotel Website & Booking System — Paonta Sahib",
    description:
      "Professional hotel booking websites for hotels near Gurudwara Paonta Sahib. Capture pilgrim traffic. No OTA commissions. Built by Adowise Labs.",
    url: "https://adowise.mohammdaltaf.dev/paonta-sahib/hotels",
  },
};

export default function HotelsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-[120px] pb-[80px] px-4 lg:px-8 bg-gradient-to-br from-[#1a0a00] to-[#3d1f00]">
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4d9c3]/20 text-[#f4d9c3] font-mono text-[10px] tracking-[0.15em] font-medium mb-8 uppercase">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#d9692a] animate-pulse" />
            Hotels · Resorts · Dharamshalas · Paonta Sahib
          </div>
          <h1 className="font-display italic text-[clamp(36px,6vw,68px)] font-light leading-[1.05] tracking-[-0.03em] text-white mb-6">
            Hotel Website &<br />
            Booking System for<br />
            <span className="text-[#d9692a]">Paonta Sahib</span>
          </h1>
          <p className="text-[20px] text-[#c9a880] max-w-[700px] leading-relaxed mb-6">
            Every month, thousands of pilgrims and tourists visit Gurudwara Paonta Sahib. They search &ldquo;hotel near Paonta Sahib Gurudwara&rdquo; on Google. <strong className="text-white">Is your hotel showing up?</strong>
          </p>
          <p className="text-[18px] text-[#c9a880] max-w-[700px] leading-relaxed mb-10">
            <strong className="text-white">Adowise Labs</strong> builds professional hotel websites with direct booking systems so you capture this traffic — without paying 20-30% commission to MakeMyTrip or Booking.com.
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi, I need a hotel website for my property near Gurudwara Paonta Sahib"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#d9692a] text-white rounded-full font-semibold text-[16px] hover:bg-[#c45a1f] transition-colors inline-block"
          >
            📞 Get Free Consultation
          </a>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display italic text-[clamp(24px,3.5vw,42px)] font-light text-[#1f1b16] mb-8">
            The <span className="text-[#d9692a]">opportunity</span> you&apos;re missing
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { num: "24,000+", label: "Google reviews on Gurudwara Paonta Sahib Ji", desc: "That's 24,000+ real visitors who searched online" },
              { num: "October–March", label: "Peak pilgrim season", desc: "Hotels near the Gurudwara are fully booked. Are you capturing this?" },
              { num: "20-30%", label: "OTA commission you pay per booking", desc: "On ₹3,000/night room, you lose ₹600–900 per booking to MakeMyTrip" },
            ].map((stat) => (
              <div key={stat.label} className="p-8 rounded-[20px] bg-[#fff9f3] border border-[#e1d7c5] text-center">
                <div className="text-[36px] font-bold text-[#d9692a] mb-2">{stat.num}</div>
                <div className="font-semibold text-[#1f1b16] mb-2 text-[15px]">{stat.label}</div>
                <div className="text-[13px] text-[#8a7f72]">{stat.desc}</div>
              </div>
            ))}
          </div>
          <div className="p-8 rounded-[20px] bg-[#fff3e0] border border-[#d9692a]/30">
            <p className="text-[18px] text-[#1f1b16]">
              <strong>The solution:</strong> A professional hotel website with direct booking, Google Business Profile optimization, and SEO — so tourists find you first and book directly. Adowise Labs builds this for hotels in Paonta Sahib.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 px-4 lg:px-8 bg-[#fff9f3]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display italic text-[clamp(24px,3.5vw,42px)] font-light text-[#1f1b16] mb-12">
            What we build for hotels in Paonta Sahib
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🌐", title: "Hotel Website", desc: "Professional, mobile-first website with stunning room photos, pricing, amenities, and a direct booking form." },
              { icon: "📅", title: "Direct Booking System", desc: "Online reservation system. Guests book and pay directly — no OTA commission. Includes booking confirmation emails." },
              { icon: "📸", title: "Photo Gallery", desc: "Professional presentation of your rooms, restaurant, facilities, and surrounding views of Yamuna River." },
              { icon: "⭐", title: "Google Reviews Integration", desc: "Display your Google reviews on the website to build trust with potential guests." },
              { icon: "🗺️", title: "Google Maps & Directions", desc: "Interactive map showing your hotel location relative to Gurudwara Paonta Sahib Ji and other attractions." },
              { icon: "📱", title: "WhatsApp Booking", desc: "One-click WhatsApp button so guests can instantly message you for availability and custom rates." },
              { icon: "🔍", title: "Local SEO", desc: "We optimize your website to rank for 'hotel near Gurudwara Paonta Sahib', 'hotel Paonta Sahib', and similar searches." },
              { icon: "📊", title: "Google Business Profile", desc: "Set up and optimize your Google Maps listing so you appear in 'hotels near me' searches." },
              { icon: "📣", title: "Digital Marketing", desc: "Google Ads and Facebook Ads campaigns to drive bookings during peak pilgrim seasons." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-[20px] p-6 border border-[#e1d7c5] hover:border-[#d9692a] transition-colors">
                <div className="text-[36px] mb-3">{f.icon}</div>
                <h3 className="font-semibold text-[18px] text-[#1f1b16] mb-2">{f.title}</h3>
                <p className="text-[14px] text-[#4a413a] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4 lg:px-8 bg-[#1f1b16]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-display italic text-[clamp(24px,3.5vw,42px)] font-light text-white mb-8">
            The <span className="text-[#d9692a]">ROI</span> calculation
          </h2>
          <div className="space-y-4">
            {[
              { label: "Average room rate", value: "₹3,000/night" },
              { label: "OTA commission (25%)", value: "₹750/booking" },
              { label: "If you get 10 direct bookings/month", value: "₹7,500 saved" },
              { label: "In one year", value: "₹90,000 saved" },
              { label: "Website cost with us", value: "₹35,000 (one time)" },
              { label: "NET PROFIT in year 1", value: "₹55,000+" },
            ].map((row, i) => (
              <div key={row.label} className={`flex justify-between items-center p-4 rounded-[12px] ${i === 5 ? "bg-[#d9692a] text-white font-bold text-[18px]" : "bg-white/5 text-[#c9a880]"}`}>
                <span>{row.label}</span>
                <span className={i === 5 ? "text-white" : "text-white"}>{row.value}</span>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#8a7f72] mt-4">* Based on 10 bookings/month converting from OTA to direct. Your savings could be much higher.</p>
        </div>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Hotel Website Development — Paonta Sahib",
            "description": "Professional hotel booking websites for hotels near Gurudwara Paonta Sahib. Direct booking systems, Google SEO, WhatsApp integration.",
            "provider": {
              "@type": "Organization",
              "name": "Adowise Labs",
              "url": "https://adowise.mohammdaltaf.dev",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paonta Sahib",
                "addressRegion": "Himachal Pradesh",
                "addressCountry": "IN"
              }
            },
            "areaServed": "Paonta Sahib, Himachal Pradesh",
            "offers": {
              "@type": "Offer",
              "price": "35000",
              "priceCurrency": "INR"
            }
          })
        }}
      />

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-display italic text-[clamp(28px,4vw,48px)] font-light text-[#1f1b16] mb-6">
            Start getting direct bookings from <span className="text-[#d9692a]">Gurudwara pilgrims</span>
          </h2>
          <p className="text-[18px] text-[#4a413a] mb-10">
            Free consultation. We&apos;re local to Paonta Sahib — let&apos;s discuss how to grow your hotel bookings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi, I need a hotel website for Paonta Sahib"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#d9692a] text-white rounded-full font-semibold hover:bg-[#c45a1f] transition-colors"
            >
              WhatsApp Us Now
            </a>
            <Link
              href="/paonta-sahib"
              className="px-8 py-4 border-2 border-[#d9692a] text-[#d9692a] rounded-full font-semibold hover:bg-[#f4d9c3] transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
