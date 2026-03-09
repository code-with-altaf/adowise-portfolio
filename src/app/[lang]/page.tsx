"use client";

import { useEffect, useState } from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Founders from "@/components/Founders/Founders";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ChatBot from "@/components/ChatBot";
import Loader from "@/components/Common/Loader";

export default function Home({ params }: { params: any }) {
  const [settings, setSettings] = useState<any>({});
  const [messages, setMessages] = useState<any>(null);
  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    // Resolve params if it's a promise
    const resolveParams = async () => {
      const resolved = await params;
      setLang(resolved.lang || "en");
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    // Fetch Settings
    fetch("/api/admin/settings")
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(err => console.error("Page settings failed", err));

    // Fetch Messages locally since this is now a client component
    if (lang) {
      import(`@/messages/${lang}.json`)
        .then(m => setMessages(m.default))
        .catch(e => console.error("Failed to load messages", e));
    }
  }, [lang]);

  if (!messages) return <Loader />;

  const t = messages.Index || {};

  return (
    <>
      <ScrollUp />
      <Hero
        messages={messages}
        title={t.hero_title}
        subtitle={t.hero_subtitle}
      />
      <Features messages={messages} />
      <Brands />
      <AboutSectionOne messages={messages} />
      <AboutSectionTwo messages={messages} />
      <Testimonials messages={messages} />
      <Founders messages={messages} />
      <Contact messages={messages} />
      <Blog messages={messages} />
      <FAQ messages={messages} />

      {/* AI Chat Bot */}
      <ChatBot />

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${settings.whatsapp_number || "9882835865"}?text=${encodeURIComponent(settings.whatsapp_message || "Hi Adowise Team, I need help")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 animate-whatsapp-shake"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="28"
          height="28"
        >
          <path d="M20.52 3.48A11.78 11.78 0 0012 0a11.78 11.78 0 00-8.52 3.48A11.78 11.78 0 000 12a11.63 11.63 0 001.62 5.94L0 24l6.24-1.62A12 12 0 0012 24a11.78 11.78 0 008.52-3.48A11.78 11.78 0 0024 12a11.78 11.78 0 00-3.48-8.52zM12 22a9.9 9.9 0 01-5-1.38l-.36-.18-3.7.96.98-3.6-.22-.38A9.9 9.9 0 012 12a10 10 0 1110 10zm5.44-7.44c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.15 8.15 0 01-2.4-1.47 9 9 0 01-1.68-2.1c-.17-.3 0-.46.13-.61.13-.13.3-.35.43-.52a2 2 0 00.28-.5.56.56 0 00-.02-.54c-.07-.15-.67-1.62-.92-2.22s-.5-.5-.67-.5h-.57a1.1 1.1 0 00-.8.37 3.34 3.34 0 00-1.04 2.47 5.85 5.85 0 001.22 3.07 13.26 13.26 0 005.02 4.47c.6.26 1.07.41 1.44.54a3.47 3.47 0 001.57.1 2.62 2.62 0 001.78-1.25 2.18 2.18 0 00.15-1.25c-.06-.1-.25-.16-.55-.32z" />
        </svg>
      </a>
    </>
  );
}


