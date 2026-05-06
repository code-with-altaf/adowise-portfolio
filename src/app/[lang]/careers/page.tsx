import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { getMessages } from "@/lib/i18n";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.Careers;

  return {
    title: t.title,
    description: t.subtitle,
  };
}

const CareersPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.Careers;

  const benefits = [
    {
      id: 1,
      title: t.benefit1_title,
      description: t.benefit1_desc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-8 h-8 text-primary"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
      )
    },
    {
      id: 2,
      title: t.benefit2_title,
      description: t.benefit2_desc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-8 h-8 text-primary"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
      )
    },
    {
      id: 3,
      title: t.benefit3_title,
      description: t.benefit3_desc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up w-8 h-8 text-primary"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
      )
    },
    {
      id: 4,
      title: t.benefit4_title,
      description: t.benefit4_desc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-8 h-8 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    }
  ];

  return (
    <>
      <Breadcrumb
        pageName={t.title}
        description={t.subtitle}
        lang={lang}
        slug="careers"
      />

      <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              {t.why_title}
            </h2>
            <p className="mt-4 text-base font-medium text-body-color max-w-2xl mx-auto">
              {t.why_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="p-8 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-bold ml-3 text-black dark:text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-base text-body-color leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-light dark:bg-dark-2">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
              {t.opportunities_title}
            </h2>
            <p className="mt-4 text-base text-body-color max-w-2xl mx-auto">
              {t.opportunities_subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto p-12 bg-white dark:bg-dark rounded-xl shadow-three border border-primary/20 text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
              Join Our Talent Network
            </h3>
            <p className="text-body-color mb-6">
              We are constantly looking for bright minds to join us. Submit your application and we'll reach out when an opportunity matches your profile!
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdR-AYoLU4JOTvLC1AehjHlKroWpb63dhLBViACk7CR6BQKbw/viewform?usp=sharing&ouid=106811521549058957221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary/90 transition-colors">
              Submit Application
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 overflow-hidden bg-primary">
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            {t.cta_title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {t.cta_subtitle}
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdR-AYoLU4JOTvLC1AehjHlKroWpb63dhLBViACk7CR6BQKbw/viewform?usp=sharing&ouid=106811521549058957221"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-primary hover:bg-gray-100 transition-all"
          >
            {t.cta_btn}
            <span className="ml-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
            </span>
          </a>
        </div>
        
        {/* Decorative patterns */}
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="50" r="100" stroke="white" strokeWidth="40"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-10">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-50" y="200" width="200" height="200" rx="40" transform="rotate(45 -50 200)" stroke="white" strokeWidth="40"/>
          </svg>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
