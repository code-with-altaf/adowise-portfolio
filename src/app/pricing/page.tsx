import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | Adowise Web Development",
  description:
    "Explore Adowise website development pricing plans for basic, business, and ecommerce websites with complete deployment support.",
  alternates: {
    canonical: "https://adowise.in/pricing",
  },
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing"
        description="Transparent website development pricing for startups, businesses, and ecommerce brands."
      />
      <Pricing />
    </>
  );
};

export default PricingPage;
