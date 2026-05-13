"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#F9F2EC]">
      <Header />
      
      <div className="pt-[140px] pb-24 px-4">
        <div className="max-w-[800px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="font-display italic text-[48px] md:text-[64px] leading-none tracking-[-0.02em] text-[#1f1b16] mb-6">
              Terms of <span className="text-[#d9692a]">Service</span>
            </h1>
            <p className="text-[14px] font-mono text-[#1f1b16]/60 uppercase tracking-widest">
              Last Updated: May 13, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-[#1f1b16]/80 leading-relaxed text-[16px]">
            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Adowise platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">2. Service Description</h2>
              <p>
                Adowise provides an AI-driven Growth Engine designed to automate lead discovery, outreach, and qualification. Our services include data scraping, automated messaging, and pipeline management tools.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">3. Use of AI and Scraping Tools</h2>
              <p>
                Your use of our AI and scraping capabilities is subject to the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You will not use the tools for any illegal or unauthorized purpose.</li>
                <li>You are responsible for ensuring that your use of scraped data complies with local privacy laws and the target platform's terms.</li>
                <li>Adowise is not liable for any account restrictions or bans incurred from third-party platforms as a result of automated outreach.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">4. Intellectual Property</h2>
              <p>
                The Adowise platform, including its original content, features, and functionality, are and will remain the exclusive property of Adowise and its licensors. Our trademarks and brand assets may not be used in connection with any product or service without prior written consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">5. User Obligations</h2>
              <p>
                You agree to provide accurate information when creating an account and to maintain the security of your login credentials. You are solely responsible for all activities that occur under your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">6. Limitation of Liability</h2>
              <p>
                In no event shall Adowise, nor its directors, employees, or partners, be liable for any indirect, incidental, or consequential damages resulting from your use of the platform or the performance of our AI agents.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">7. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1f1b16]">8. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Adowise operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="p-8 rounded-[24px] bg-[#fffcf6] border border-[#e1d7c5] mt-16 text-center">
              <p className="text-[15px] italic">
                If you have any questions about these Terms, please contact us at:
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
