// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | #1 Web Development Agency Privacy Terms",
  description:
    "Read the comprehensive privacy policy and data security standards of Adowise, the world's leading Next.js React web development and enterprise SaaS agency.",
  keywords: [
    "ADOWISE privacy policy",
    "web development agency privacy",
    "IT company data security",
    "top tech agency policy",
    "Next.js react agency terms"
  ],
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-[140px] pb-20 bg-slate-50 dark:bg-[#020617]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-slate-200 dark:bg-[#020617]/90 dark:ring-white/10 sm:p-10">
          {/* Header */}
          <header className="mb-8 border-b border-slate-200 pb-6 dark:border-white/10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
              Legal
            </p>
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Last updated: 15 January 2026
            </p>
          </header>

          {/* Intro */}
          <section className="mb-8 space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
            <p>
              This Privacy Policy explains how Adowise collects, uses, and protects
              your personal information when you use our website, services, and
              digital products.
            </p>
            <p>
              By accessing or using our services, you agree to the collection and
              use of information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Sections */}
          <div className="space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
            {/* Interpretation & Definitions */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                Interpretation and Definitions
              </h2>
              <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">
                Interpretation
              </h3>
              <p className="mb-3">
                Words with capitalized initial letters have meanings defined under
                the following conditions. The definitions below apply whether they
                appear in singular or plural.
              </p>

              <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">
                Definitions
              </h3>
              <p className="mb-3">For the purposes of this Privacy Policy:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Account
                  </span>{" "}
                  means a unique profile created for you to access our services.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Company
                  </span>{" "}
                  (referred to as “Adowise”, “we”, “us” or “our”) refers to
                  Adowise Web Development Agency.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Country
                  </span>{" "}
                  refers to India.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Cookies
                  </span>{" "}
                  are small files stored on your device by your browser.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Service
                  </span>{" "}
                  refers to our website, SaaS tools, and related web development
                  services.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Personal Data
                  </span>{" "}
                  means any information that identifies or can be used to identify
                  an individual.
                </li>
              </ul>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                Collecting and Using Your Personal Data
              </h2>

              <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">
                Types of Data Collected
              </h3>

              <h4 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
                Personal Data
              </h4>
              <p className="mb-3">
                We may ask you to provide certain information that can be used to
                contact or identify you, including:
              </p>
              <ul className="mb-4 list-disc space-y-1 pl-5">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company or project details you share with us</li>
              </ul>

              <h4 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
                Usage Data
              </h4>
              <p>
                Usage Data is collected automatically and may include your IP
                address, browser type, device information, pages visited, time and
                date of visits, and other diagnostic data.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                Cookies and Tracking Technologies
              </h2>
              <p className="mb-3">
                We use cookies and similar technologies to improve your experience,
                analyze traffic, and understand how our services are used.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Browser Cookies:
                  </span>{" "}
                  small text files stored on your device that help remember your
                  preferences.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Analytics Cookies:
                  </span>{" "}
                  used to measure traffic and usage patterns.
                </li>
              </ul>
            </section>

            {/* Use of Data */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                How We Use Your Personal Data
              </h2>
              <p className="mb-3">Adowise may use your information to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Provide, operate, and maintain our services</li>
                <li>Create and manage your account</li>
                <li>Respond to inquiries and support requests</li>
                <li>Send updates, technical notices, and project communication</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </section>

            {/* Retention & Security */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                Data Retention & Security
              </h2>
              <p className="mb-3">
                We retain Personal Data only for as long as necessary for the
                purposes described in this policy or as required by law.
              </p>
              <p>
                We use reasonable technical and organizational measures to protect
                your data. However, no method of transmission or storage over the
                internet is completely secure.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                Children’s Privacy
              </h2>
              <p>
                Our services are not directed to individuals under 13. We do not
                knowingly collect personal data from children under 13. If you
                believe a child has provided us data, please contact us to remove it.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated “Last updated” date.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or how Adowise
                handles your data, you can contact us at:
              </p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:adowise.info@gmail.com"
                  className="font-medium text-primary hover:underline"
                >
                  adowise.info@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
