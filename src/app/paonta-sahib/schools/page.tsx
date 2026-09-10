import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "School Management Software Paonta Sahib | Adowise Labs",
  description:
    "Best school management software for schools and colleges in Paonta Sahib — attendance, fees, exams, parent portal, online admissions. Used by schools in Sirmaur, Himachal Pradesh. Adowise Labs.",
  keywords: [
    "school management software paonta sahib",
    "school ERP paonta sahib",
    "school website paonta sahib",
    "school software sirmaur",
    "best school paonta sahib website",
    "scholars home paonta sahib website",
    "GNMPS paonta sahib software",
    "coaching software paonta sahib",
    "college management software paonta sahib",
    "online admission paonta sahib school",
    "parent portal school paonta sahib",
  ],
  openGraph: {
    title: "School Management Software & Websites — Paonta Sahib",
    description:
      "Complete school ERP: attendance, fees, exams, parent portal, online admissions. Built for schools and colleges in Paonta Sahib, Sirmaur, Himachal Pradesh.",
    url: "https://adowise.mohammdaltaf.dev/paonta-sahib/schools",
  },
};

const features = [
  { icon: "📋", title: "Attendance Management", desc: "Daily attendance tracking for students and teachers. Auto SMS/WhatsApp alerts to parents when child is absent." },
  { icon: "💰", title: "Fee Management", desc: "Online fee collection, receipts, due reminders via WhatsApp, fee reports by class/student." },
  { icon: "📝", title: "Examination System", desc: "Exam scheduling, mark entry, result generation, report cards — fully digital." },
  { icon: "👨‍👩‍👧", title: "Parent Portal", desc: "Parents can check attendance, fees, results, timetable, and communicate with teachers from any device." },
  { icon: "📚", title: "Online Admissions", desc: "Digital admission forms, document upload, application tracking. No paper forms." },
  { icon: "📱", title: "School Website", desc: "Professional website with news, events, gallery, staff directory, and contact forms. Rank on Google." },
  { icon: "🗓️", title: "Timetable & Scheduling", desc: "Auto-generate class timetables, manage teacher schedules, track substitutions." },
  { icon: "💬", title: "WhatsApp Communication", desc: "Send circulars, notices, and results directly to parent WhatsApp. Reach 100% of parents instantly." },
  { icon: "📊", title: "Admin Dashboard", desc: "Principal dashboard with real-time stats — total students, fee collection, attendance rate, upcoming events." },
];

const schoolTypes = [
  "CBSE Schools in Paonta Sahib",
  "ICSE Schools in Sirmaur District",
  "State Board Schools",
  "Private English Medium Schools",
  "Coaching Centres & Tuition Classes",
  "Computer Training Institutes",
  "Colleges & Junior Colleges",
  "Nursery & Playschools",
];

export default function SchoolsSoftwarePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-[120px] pb-[80px] px-4 lg:px-8 bg-gradient-to-br from-[#f0f7ff] to-[#e8f4fd]">
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cce5ff] text-[#0066cc] font-mono text-[10px] tracking-[0.15em] font-medium mb-8 uppercase">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#0066cc] animate-pulse" />
            Schools · Colleges · Coaching Centres · Paonta Sahib
          </div>
          <h1 className="font-display italic text-[clamp(36px,6vw,68px)] font-light leading-[1.05] tracking-[-0.03em] text-[#0d1b2e] mb-6">
            School Management<br />
            Software for <span className="text-[#0066cc]">Paonta Sahib</span>
          </h1>
          <p className="text-[20px] text-[#2d4a6e] max-w-[700px] leading-relaxed mb-10">
            Complete digital management system for schools, colleges, and coaching centres in Paonta Sahib. Attendance, fees, exams, parent portal, online admissions — all in one platform. Built by <strong>Adowise Labs</strong>, based in Paonta Sahib.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi, I want school management software for my school in Paonta Sahib"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0066cc] text-white rounded-full font-semibold text-[16px] hover:bg-[#0052a3] transition-colors"
            >
              📞 Get Free Demo
            </a>
            <Link
              href="/paonta-sahib"
              className="px-8 py-4 border-2 border-[#0066cc] text-[#0066cc] rounded-full font-semibold text-[16px] hover:bg-[#cce5ff] transition-colors"
            >
              All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display italic text-[clamp(24px,3.5vw,42px)] font-light text-[#0d1b2e] mb-8">
            Is your school still managing everything on <span className="text-[#0066cc]">paper?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Manually calling parents for fee reminders?",
              "Paper attendance registers that get lost?",
              "Physical fee receipts that take hours to generate?",
              "No way for parents to check attendance online?",
              "Exam results shared only on notice boards?",
              "No professional school website?",
            ].map((problem) => (
              <div key={problem} className="flex items-start gap-3 p-4 rounded-[12px] bg-[#fff3f3] border border-[#ffd0d0]">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span className="text-[#4a1a1a] text-[15px]">{problem}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-[16px] bg-[#e8f4fd] border border-[#0066cc]/20">
            <p className="text-[18px] text-[#0d1b2e] font-medium">
              Schools like The Scholars&apos; Home and GNMPS in Paonta Sahib are growing their digital presence. Don&apos;t get left behind. <strong>Adowise Labs</strong> builds complete school management systems that solve all of these problems.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 lg:px-8 bg-[#f0f7ff]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display italic text-[clamp(24px,3.5vw,42px)] font-light text-[#0d1b2e] mb-4">
            Everything your school needs
          </h2>
          <p className="text-[18px] text-[#2d4a6e] mb-12">
            One complete system. No need for 5 different apps.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-[20px] p-6 border border-[#c5dff8] hover:border-[#0066cc] transition-colors">
                <div className="text-[36px] mb-3">{f.icon}</div>
                <h3 className="font-semibold text-[18px] text-[#0d1b2e] mb-2">{f.title}</h3>
                <p className="text-[14px] text-[#2d4a6e] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display italic text-[clamp(24px,3.5vw,42px)] font-light text-[#0d1b2e] mb-8">
            Perfect for every educational institution in <span className="text-[#0066cc]">Paonta Sahib</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {schoolTypes.map((type) => (
              <div key={type} className="p-4 rounded-[12px] bg-[#f0f7ff] border border-[#c5dff8] text-center">
                <span className="text-[15px] font-medium text-[#0d1b2e]">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 lg:px-8 bg-[#f0f7ff]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display italic text-[clamp(24px,3.5vw,42px)] font-light text-[#0d1b2e] mb-12">
            Transparent pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "School Website",
                price: "₹25,000",
                desc: "Professional school website with news, events, gallery, staff directory, online enquiry form",
                features: ["Mobile responsive", "SEO optimized", "Google Maps integration", "WhatsApp contact button", "1 year hosting"],
              },
              {
                name: "School ERP",
                price: "₹75,000",
                desc: "Complete school management system — attendance, fees, exams, results, parent portal",
                features: ["Student database", "Attendance + WhatsApp alerts", "Fee collection & receipts", "Exam & result management", "Parent portal", "Admin dashboard"],
                highlight: true,
              },
              {
                name: "Complete Package",
                price: "₹90,000",
                desc: "Website + Full ERP + Online admissions + WhatsApp integration + 1 year support",
                features: ["Everything in both plans", "Online admissions module", "WhatsApp bulk messaging", "Staff management", "1 year full support"],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[20px] p-8 border ${plan.highlight ? "border-[#0066cc] bg-[#0066cc] text-white" : "border-[#c5dff8] bg-white text-[#0d1b2e]"}`}
              >
                <h3 className={`font-semibold text-[20px] mb-2 ${plan.highlight ? "text-white" : "text-[#0d1b2e]"}`}>{plan.name}</h3>
                <div className={`text-[36px] font-bold mb-3 ${plan.highlight ? "text-white" : "text-[#0066cc]"}`}>{plan.price}</div>
                <p className={`text-[14px] mb-6 ${plan.highlight ? "text-blue-100" : "text-[#2d4a6e]"}`}>{plan.desc}</p>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-[14px] ${plan.highlight ? "text-blue-100" : "text-[#2d4a6e]"}`}>
                      <span className={plan.highlight ? "text-blue-200" : "text-[#0066cc]"}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#2d4a6e] mt-6 text-center">* Prices are indicative. Final pricing based on student count and exact requirements.</p>
        </div>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "School Management Software — Paonta Sahib",
            "description": "Complete school management system for schools in Paonta Sahib, Himachal Pradesh. Attendance, fees, exams, parent portal, online admissions.",
            "applicationCategory": "EducationalApplication",
            "offers": {
              "@type": "Offer",
              "price": "25000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
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
            }
          })
        }}
      />

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8 bg-[#0d1b2e] text-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-display italic text-[clamp(28px,4vw,48px)] font-light mb-6">
            Ready to digitize your <span className="text-[#4da6ff]">school?</span>
          </h2>
          <p className="text-[18px] text-[#7a9bc4] mb-10">
            We&apos;re based in Paonta Sahib. Let&apos;s meet and walk you through a live demo of the system.
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi, I want a demo of school management software for Paonta Sahib"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#0066cc] text-white rounded-full font-semibold text-[18px] hover:bg-[#0052a3] transition-colors inline-block"
          >
            WhatsApp for Free Demo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
