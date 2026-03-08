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
import { getMessages } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const messages = await getMessages(lang);
  const t = messages.Index;

  return (
    <>
      <ScrollUp />
      <Hero
        title={t.hero_title}
        subtitle={t.hero_subtitle}
      />
      <Features messages={messages} />
      <Brands />
      <AboutSectionOne messages={messages} />
      <AboutSectionTwo />
      <Testimonials />
      <Founders />
      <Contact messages={messages} />
      <Blog messages={messages} />

      {/* Massive Trending Trends SEO Section */}
      <section id="trends" className="py-20 bg-gray-50 dark:bg-black/40 overflow-hidden border-t border-gray-100 dark:border-white/5">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">Future Trends & Global Innovation We Lead</h2>
            <p className="text-base text-body-color dark:text-gray-400">At Adowise, we don't just follow trends; we define them. Explore the future with us.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 opacity-70 hover:opacity-100 transition-opacity">
            {/* Tech & AI */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase text-primary mb-3">AI & Computing</h3>
              <p className="text-xs text-dark dark:text-white/70">Generative AI (ChatGPT, Gemini, Claude)</p>
              <p className="text-xs text-dark dark:text-white/70">AI Video (Sora, Runway, Luma)</p>
              <p className="text-xs text-dark dark:text-white/70">Agentic AI & RAG</p>
              <p className="text-xs text-dark dark:text-white/70">Edge AI & SLMs</p>
              <p className="text-xs text-dark dark:text-white/70">Quantum Machine Learning</p>
            </div>

            {/* Space & Science */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase text-primary mb-3">Space & Future Science</h3>
              <p className="text-xs text-dark dark:text-white/70">SpaceX Starship & Artemis</p>
              <p className="text-xs text-dark dark:text-white/70">Mars Sample Return</p>
              <p className="text-xs text-dark dark:text-white/70">CRISPR & Gene Editing 2.0</p>
              <p className="text-xs text-dark dark:text-white/70">Anti-Aging & Longevity</p>
              <p className="text-xs text-dark dark:text-white/70">Neuromorphic Computing</p>
            </div>

            {/* Culture & Economy */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase text-primary mb-3">Business & Culture</h3>
              <p className="text-xs text-dark dark:text-white/70">Creator Economy & DeFi</p>
              <p className="text-xs text-dark dark:text-white/70">Hybrid Work & 4-Day Week</p>
              <p className="text-xs text-dark dark:text-white/70">Quiet Luxury & Stealth Wealth</p>
              <p className="text-xs text-dark dark:text-white/70">Brat Summer & Digital Nomads</p>
              <p className="text-xs text-dark dark:text-white/70">Loud Budgeting & UGC</p>
            </div>

            {/* Lifestyle & Health */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase text-primary mb-3">Lifestyle & Health</h3>
              <p className="text-xs text-dark dark:text-white/70">GLP-1 Weight Loss (Ozempic)</p>
              <p className="text-xs text-dark dark:text-white/70">Microbiome & Longevity</p>
              <p className="text-xs text-dark dark:text-white/70">Set-jetting & Coolcations</p>
              <p className="text-xs text-dark dark:text-white/70">Van Life & E-bikes</p>
              <p className="text-xs text-dark dark:text-white/70">Zero-proof Drinks & Gut Health</p>
            </div>

            {/* Connectivity & Security */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase text-primary mb-3">Security & Connect</h3>
              <p className="text-xs text-dark dark:text-white/70">Zero Trust Architecture</p>
              <p className="text-xs text-dark dark:text-white/70">6G Networks & Ambient Tech</p>
              <p className="text-xs text-dark dark:text-white/70">Deepfake Detection</p>
              <p className="text-xs text-dark dark:text-white/70">Smart Dust & Haptics</p>
              <p className="text-xs text-dark dark:text-white/70">Post-quantum Crypto</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 opacity-30 text-[10px] uppercase tracking-widest text-dark dark:text-white text-center">
            <span>Asteroid Mining</span> • <span>Orbital Debris Cleanup</span> • <span>Bioprinting 3D Organs</span> • <span>Vertical Farming</span> • <span>Carbon Capture Tech</span> • <span>Waste-to-energy</span> • <span>Alternative Proteins</span> • <span>Floating Offshore Wind</span> • <span>Space Manufacturing</span> • <span>Commercial Space Stations</span>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9882835865?text=Hi%20Adowise%20Team%2C%20I%20need%20help"
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


