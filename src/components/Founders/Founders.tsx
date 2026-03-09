"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaExternalLinkAlt } from "react-icons/fa";
import { ShinyButton } from "../ui/shiny-button";

type Founder = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  portfolio?: string;
  imageClassName?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
};

const Founders = ({ messages }: { messages?: any }) => {
  const [founders, setFounders] = useState<Founder[]>([]);
  const t = messages?.Founders || {};

  const foundersDataStatic: Founder[] = [
    {
      id: 1,
      name: "Mohd Altaf",
      role: "Founder & CEO",
      image: "/images/altaf.jpg",
      bio: t.founder1_bio || "Altaf is a visionary leader with over 6 years of experience in SaaS and web technologies. He focuses on building scalable and user-friendly platforms.",
      portfolio: "https://altaf.adowise.com",
      imageClassName: "object-top",
      social: {
        linkedin: "https://linkedin.com/in/reachmohdaltaf",
        twitter: "https://twitter.com/reachmohdaltaf",
      },
    },
    {
      id: 2,
      name: "Mohd Aftab",
      role: "Co-founder & CTO",
      image: "/images/aftab.jpg",
      bio: t.founder2_bio || "Aftab is a tech enthusiast and full-stack developer. He leads the product and engineering teams ensuring top-notch quality and innovation.",
      portfolio: "https://aftab.adowise.com",
      social: {
        linkedin: "https://linkedin.com/in/aftab",
        twitter: "https://x.com/aftabkh79957721",
      },
    },
  ];

  useEffect(() => {
    const fetchFounders = async () => {
      try {
        const res = await fetch("/api/admin/founders");
        if (res.ok) {
          const data = await res.json();
          if (data.length > 0) {
            setFounders(data);
          } else {
            setFounders(foundersDataStatic);
          }
        } else {
          setFounders(foundersDataStatic);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic founders", err);
        setFounders(foundersDataStatic);
      }
    };
    fetchFounders();
  }, []);

  const FounderCard = ({ founder }: { founder: Founder }) => (
    <div className="w-full px-4 md:w-1/2">
      <div className="group relative mb-10 overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-900/70 border border-white/20 dark:border-white/30 backdrop-blur-xl p-8 hover:bg-gray/20 dark:hover:bg-gray-700/70 hover:border-white/30 dark:hover:border-white/50 hover:-translate-y-2 transition-all duration-500">
        {/* Gradient overlay for premium effect matching Features card */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A9B9FB]/40 to-[#5E7CF7]/40 dark:from-white/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>

        {/* Glassmorphism content wrapper */}
        <div className="relative z-10 w-full">

          {/* Profile Image with glow effect */}
          <div className="relative mx-auto mb-6 h-40 w-40">
            {/* Blurred light circle in background */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-morph"
            ></div>
            <div
              className="relative h-full w-full overflow-hidden border-4 border-white/50 dark:border-gray-600/50 transition-all duration-300 group-hover:scale-105 animate-morph"
            >
              <Image
                src={founder.image}
                alt={founder.name}
                width={160}
                height={160}
                className={`h-full w-full object-cover ${founder.imageClassName || ""}`}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative">
            <h4 className="mb-2 pt-4 text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
              {founder.name}
            </h4>

            <p className="mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
              {founder.role}
            </p>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {founder.bio}
            </p>

            {/* Portfolio Button */}
            {founder.portfolio && (
              <a
                href={founder.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <ShinyButton className="w-full justify-center">
                  {t.view_portfolio || "View Portfolio"}
                </ShinyButton>
              </a>
            )}

            {/* Social Links */}
            <div className="mt-6 flex justify-center space-x-4">
              {founder.social?.linkedin && (
                <a
                  href={founder.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-gray-700 backdrop-blur-sm transition-all duration-300 hover:bg-blue-600 hover:text-white dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-blue-600"
                  aria-label={`${founder.name}'s LinkedIn`}
                >
                  <FaLinkedin size={18} />
                </a>
              )}

              {founder.social?.twitter && (
                <a
                  href={founder.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-gray-700 backdrop-blur-sm transition-all duration-300 hover:bg-blue-400 hover:text-white dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-blue-400"
                  aria-label={`${founder.name}'s Twitter`}
                >
                  <FaTwitter size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700"></div>
        {/* Background gradient light effect */}
        <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-3xl"></div>
      </div>
    </div>
  );

  return (
    <section className="relative py-20 md:py-24 lg:py-32">
      {/* Background light effects */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t.title || "Meet Our Founders"}
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="-mx-4 flex flex-wrap justify-center">
          {founders.map((founder) => (
            <FounderCard key={(founder as any)._id || founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;