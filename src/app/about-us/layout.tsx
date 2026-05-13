import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Adowise - Automating Human Potential",
  description: "Learn about Adowise's mission to automate, simplify, and elevate human potential through autonomous digital workers and AI-first automation solutions.",
  openGraph: {
    title: "About Adowise | The Digital Worker Company",
    description: "Building the future of work where digital workers handle the mundane and humans focus on impact.",
    images: ["/about/hero.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
