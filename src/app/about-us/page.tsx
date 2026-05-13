"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-[120px] pb-[80px] px-4 lg:px-8 overflow-hidden">
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4d9c3] text-[#b8541e] font-mono text-[10px] tracking-[0.15em] font-medium mb-8 uppercase"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#d9692a] animate-pulse" />
            Our Vision
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display italic text-[clamp(40px,6vw,80px)] font-light leading-[1.05] tracking-[-0.03em] text-[#1f1b16] mb-8 max-w-[900px] mx-auto"
          >
            Automating, <span className="text-[#d9692a]">Simplifying,</span> and <span className="text-[#8a7f72] italic font-light">Elevating</span> <span className="text-[#d9692a] italic-wonk">Human Potential.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[700px] mx-auto text-[18px] md:text-[20px] text-[#4a413a] leading-relaxed mb-12"
          >
            Adowise is an AI and Automation company that builds autonomous digital workers to handle the essential but mundane, allowing teams to scale faster and smarter.
          </motion.p>
        </div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-[800px] mx-auto rounded-[24px] overflow-hidden shadow-xl border border-[#ebe3d3]"
        >
          <Image 
            src="/about/hero.png" 
            alt="Expansive desert landscape representing vast potential" 
            width={1200} 
            height={600} 
            className="w-full h-auto object-cover min-h-[300px]"
            priority
          />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20 bg-[#f3ece0] border-y border-[#e1d7c5] px-4 lg:px-8">
        <div className="max-w-[920px] mx-auto">
          <div className="space-y-10 text-[#1f1b16]">
            <h2 className="font-display italic text-[clamp(32px,5vw,54px)] font-light leading-[1.1] tracking-[-0.03em]">
              The <span className="text-[#d9692a]">Adowise</span> Story
            </h2>
            <div className="space-y-6 text-[18px] text-[#4a413a] leading-relaxed">
              <p>
                History shows that transformative tools have always empowered people to achieve more. Yet today, countless hours are still wasted on repetitive tasks, especially in revenue functions that drive growth and innovation.
              </p>
              <p>
                Traditional software, originally designed to make us more productive, has reached its limits. Digital workers introduce a new paradigm where entire job categories can be performed autonomously. It's time for digital workers to take on the mundane, allowing humans to focus on work that drives real impact.
              </p>
              <p>
                By combining cutting-edge agents with a deep focus on the lifeblood of every business—its growth teams—we're building a future where digital workers do more than automate; they elevate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 lg:px-8">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-12">
          {/* Stats Cards */}
          {[
            { 
              label: "Human Connections", 
              value: "200 Years", 
              desc: "Freed from repetitive tasks, enabling people to focus on building real human connections." 
            },
            { 
              label: "Digital Workers", 
              value: "1000s", 
              desc: "Autonomous AI workers deployed globally across diverse industries." 
            },
            { 
              label: "Pipeline Generated", 
              value: "$25M+", 
              desc: "In revenue pipeline generated for our partners through automated intelligence." 
            },
          ].map((stat, i) => (
            <div 
              key={i}
              className="p-8 rounded-[24px] bg-transparent border border-[#ebe3d3] text-center"
            >
              <div className="font-display italic text-[32px] text-[#d9692a] mb-3">{stat.value}</div>
              <div className="text-[14px] font-bold text-[#1f1b16] mb-2 uppercase tracking-wider">{stat.label}</div>
              <p className="text-[12px] text-[#4a413a] leading-relaxed opacity-80">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Team/Join Section */}
      <section className="relative py-20 px-4 lg:px-8 text-center bg-background">
        <div className="max-w-[800px] mx-auto space-y-8">
          <h2 className="font-display italic text-[clamp(32px,5vw,54px)] font-light leading-[1.1] tracking-[-0.03em] text-[#1f1b16]">
            The <span className="text-[#d9692a]">Digital Worker</span> Company
          </h2>
          <p className="text-[18px] text-[#4a413a] leading-relaxed">
            We are growing our team and looking for exceptional individuals from around the world that want to join us in building the future of work.
          </p>
          <Link href="/careers">
            <Button className="rounded-full bg-[#1f1b16] text-[#faf6f0] px-10 py-6 text-[16px] font-bold hover:bg-[#d9692a] transition-all">
              Join us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
