import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hire Top-Rated Web & SaaS Developers Now",
  description:
    "Need a high-performing website? Contact the world's best web development agency. We build stunning Next.js websites, mobile apps, and robust SaaS tools for massive ROI. Get your free consultation.",
  keywords: [
    "hire web developers",
    "IT consulting services",
    "SaaS development agency",
    "custom software solutions contact",
    "digital transformation experts",
    "free business consultation",
    "contact best website creator",
    "hire react js experts",
    "best app developer company contact",
    "need an ecommerce developer immediately",
    "top IT agency phone number",
    "adowise customer support"
  ],
  alternates: {
    canonical: "https://adowise.in/contact",
  },
};


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get your free website quote from Himachal Pradesh's fastest web development agency. Next.js React experts ready to build your dream project."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
