import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthcare & Clinic Software Paonta Sahib | Adowise Labs",
  description:
    "Online appointment booking, clinic management software, patient portal for hospitals and clinics in Paonta Sahib, Sirmaur, Himachal Pradesh. Adowise Labs builds modern healthcare software.",
  keywords: [
    "clinic software paonta sahib",
    "hospital website paonta sahib",
    "doctor appointment booking paonta sahib",
    "clinic management software paonta sahib",
    "healthcare software sirmaur",
    "online doctor booking paonta sahib",
    "patient portal paonta sahib",
    "hospital management software paonta sahib",
    "adowise medicare paonta sahib",
  ],
  openGraph: {
    title: "Healthcare & Clinic Software — Paonta Sahib",
    description: "Online appointment booking, patient portal, clinic websites for hospitals and clinics in Paonta Sahib. Adowise Labs.",
    url: "https://adowise.mohammdaltaf.dev/paonta-sahib/healthcare",
  },
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-[120px] pb-[80px] px-4 lg:px-8 bg-gradient-to-br from-[#f0faf7] to-[#d4f2e8]">
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009688]/15 text-[#006b5e] font-mono text-[10px] tracking-[0.15em] font-medium mb-8 uppercase">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#009688] animate-pulse" />
            Clinics · Hospitals · Pharmacies · Paonta Sahib
          </div>
          <h1 className="font-display italic text-[clamp(36px,6vw,68px)] font-light leading-[1.05] tracking-[-0.03em] text-[#0d2318] mb-6">
            Healthcare Software &<br />
            Clinic Websites for<br />
            <span className="text-[#009688]">Paonta Sahib</span>
          </h1>
          <p className="text-[20px] text-[#1a4a3a] max-w-[700px] leading-relaxed mb-10">
            Modern healthcare management for clinics, hospitals, and pharmacies in Paonta Sahib. Online appointment booking, patient records, doctor profiles, and WhatsApp alerts — all in one system by <strong>Adowise Labs</strong>.
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi, I need clinic software or a healthcare website for Paonta Sahib"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#009688] text-white rounded-full font-semibold text-[16px] hover:bg-[#00796b] transition-colors inline-block"
          >
            Get Free Demo
          </a>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display italic text-[clamp(24px,3.5vw,42px)] font-light text-[#0d2318] mb-12">
            Features for healthcare providers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📅", title: "Online Appointment Booking", desc: "Patients book appointments 24/7 from your website or WhatsApp. Automatic reminders reduce no-shows." },
              { icon: "👤", title: "Patient Management", desc: "Digital patient records, visit history, prescriptions, and follow-up tracking in one secure system." },
              { icon: "👨‍⚕️", title: "Doctor Profiles", desc: "Professional doctor profiles with qualifications, specializations, and availability. Build patient trust." },
              { icon: "💬", title: "WhatsApp Integration", desc: "Appointment confirmations, reminders, and results sent automatically via WhatsApp." },
              { icon: "🌐", title: "Clinic Website", desc: "Professional website with services, doctors, location, contact, and Google Maps. Rank on Google." },
              { icon: "⭐", title: "Patient Reviews", desc: "Collect and display Google reviews from satisfied patients to build your online reputation." },
            ].map((f) => (
              <div key={f.title} className="rounded-[20px] border border-[#b2dfdb] p-8 hover:border-[#009688] transition-colors bg-[#f0faf7]">
                <div className="text-[40px] mb-4">{f.icon}</div>
                <h3 className="font-semibold text-[18px] text-[#0d2318] mb-3">{f.title}</h3>
                <p className="text-[14px] text-[#1a4a3a] leading-relaxed">{f.desc}</p>
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
            "@type": "SoftwareApplication",
            "name": "Healthcare & Clinic Software — Paonta Sahib",
            "applicationCategory": "HealthApplication",
            "description": "Online appointment booking, patient portal, clinic management for hospitals in Paonta Sahib, Himachal Pradesh.",
            "provider": {
              "@type": "Organization",
              "name": "Adowise Labs",
              "url": "https://adowise.mohammdaltaf.dev",
              "address": { "@type": "PostalAddress", "addressLocality": "Paonta Sahib", "addressRegion": "Himachal Pradesh", "addressCountry": "IN" }
            }
          })
        }}
      />

      <section className="py-20 px-4 lg:px-8 bg-[#009688] text-white">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-display italic text-[clamp(28px,4vw,42px)] font-light mb-6">
            Digitize your clinic in <span className="text-[#b2dfdb]">Paonta Sahib</span>
          </h2>
          <p className="text-[18px] text-[#b2dfdb] mb-10">Free consultation. We are local to Paonta Sahib.</p>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#009688] rounded-full font-semibold hover:bg-[#e0f2f1] transition-colors inline-block">
            WhatsApp for Free Demo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
