import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = ({ messages }: { messages: any }) => {
  const t = messages.About;
  const List = ({ text }: { text: string }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={t.title}
                paragraph={t.paragraph}
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text={t.list1} />
                    <List text={t.list2} />
                    <List text={t.list3} />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text={t.list4} />
                    <List text={t.list5} />
                    <List text={t.list6} />
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Profile for Trust (E-E-A-T) */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] lg:mr-0">
                <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 ring-1 ring-primary/20">
                  <div className="flex items-center gap-6">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-white shadow-xl">
                      <Image
                        src="https://media.licdn.com/dms/image/v2/D5603AQH6vX8lVgE4Jw/profile-displayphoto-scale_400_400/B56ZzZfhRKIkAg-/0/1773175449229?e=1777507200&v=beta&t=CmuyLlecdwDn82EvkgqqbR80Fwyff7kmYDiJadvEoZs"
                        alt="Mohammad Altaf"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Mohammad Altaf</h3>
                      <p className="text-primary font-semibold">Founder & Lead Systems Architect</p>
                      <div className="mt-2 flex gap-4">
                        <a href="https://www.linkedin.com/in/reachmohdaltaf/" className="text-body-color hover:text-primary transition-colors">
                          LinkedIn
                        </a>
                        <a href="https://github.com/reachmohdaltaf" className="text-body-color hover:text-primary transition-colors">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 italic text-body-color">
                    "At Adowise, we don't just write code; we solve socio-economic challenges using Next.js and AI. Whether it's the Forest Crime Management Portal or high-scale real estate platforms, our goal is permanent impact."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
