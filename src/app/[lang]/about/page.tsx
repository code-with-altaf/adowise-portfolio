import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Adowise | World's Leading Web & SaaS Development Agency",
  description:
    "Learn about Adowise, the world's premier IT agency. We engineer top-tier Next.js React web apps, scalable Enterprise SaaS products, and custom portals to rapidly scale businesses globally.",
  keywords: [
    "top global web agency",
    "world-class IT company",
    "premier SaaS development firm",
    "enterprise software development",
    "best Next.js React developers",
    "global digital transformation",
    "top IT outsourcing company",
    "number one tech agency",
    "expert web development team",
    "custom enterprise portal design",
    "global AI solutions provider",
    "about adowise company"
  ],
  alternates: {
    canonical: "https://adowise.in/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Discover Adowise, the ultimate SaaS & business solution designed to help startups and businesses scale efficiently."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
