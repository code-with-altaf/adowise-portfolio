"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F9F2EC]">
      <Header />
      
      <div className="pt-[140px] pb-24 px-4">
        <div className="max-w-[800px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="font-display italic text-[48px] md:text-[64px] leading-none tracking-[-0.02em] text-[#1f1b16] mb-6">
              Privacy <span className="text-[#d9692a]">Policy</span>
            </h1>
            <p className="text-[14px] font-mono text-[#1f1b16]/60 uppercase tracking-widest">
              Last Updated: May 13, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-[#1f1b16]/80 leading-relaxed text-[16px]">
            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">1. Introduction</h2>
              <p>
                At Adowise, we are committed to protecting your privacy and ensuring the security of your data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI Growth Engine and scraping tools.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">2. Data We Collect</h2>
              <p>
                We collect information to provide better services to all our users. The types of data we collect include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Name, work email, and contact details provided during signup.</li>
                <li><strong>Scraping Data:</strong> Publicly available information sourced from platforms like LinkedIn, Google, and other professional networks to help build your sales pipeline.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our platform, including search queries and system preferences.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">3. How We Use Data</h2>
              <p>
                The data we collect is used solely for the purpose of optimizing your sales pipeline:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To discover and qualify leads based on your specific ICP.</li>
                <li>To personalize automated outreach sequences for higher engagement.</li>
                <li>To improve our AI models and scraping efficiency.</li>
                <li>To provide technical support and ensure system stability.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. This includes encrypted data storage and secure API integrations with third-party platforms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">5. Third-Party Services</h2>
              <p>
                Our platform integrates with third-party tools like Google, Salesforce, and HubSpot. While we ensure our integrations are secure, your use of these services is also governed by their respective privacy policies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">6. Ethical Scraping</h2>
              <p>
                Adowise adheres to ethical scraping practices. We only source information that is publicly available and respect the terms of service of the platforms we interact with. We do not engage in unauthorized harvesting of private data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">7. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal data at any time. If you wish to exercise these rights or have questions about our data practices, please contact us.
              </p>
            </section>

            <section className="p-8 rounded-[24px] bg-[#fffcf6] border border-[#e1d7c5] mt-16">
              <h3 className="text-[18px] font-bold text-[#1f1b16] mb-4 italic font-display">Contact Us</h3>
              <p className="text-[15px]">
                For any privacy-related inquiries, please email our security team at:
                <br />
                <a href="mailto:info.adowise@gmail.com" className="text-[#d9692a] font-bold hover:underline">info.adowise@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
