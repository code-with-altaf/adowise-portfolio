import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getMessages } from "@/lib/i18n";

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.About;

  return {
    title: `About Adowise | ${t.title}`,
    description: t.paragraph,
  };
}

const AboutPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.About;

  return (
    <>
      <Breadcrumb
        pageName={t.title}
        description={t.paragraph}
        lang={lang}
      />
      <AboutSectionOne messages={messages} />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
