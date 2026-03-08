import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { getMessages } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.Contact;

  return {
    title: `Contact Us | ${t.title}`,
    description: t.subtitle,
  };
}

const ContactPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.Contact;

  return (
    <>
      <Breadcrumb
        pageName={t.title}
        description={t.subtitle}
        lang={lang}
      />
      <Contact messages={messages} />
    </>
  );
};

export default ContactPage;
