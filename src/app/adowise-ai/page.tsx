"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AdowiseAiLanding() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      <Header />

      {/* Hero */}
      <section className="relative pt-[120px] lg:pt-[100px] pb-16 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#d9692a]/15 blur-3xl" />
          <div className="absolute top-40 -right-24 w-[520px] h-[520px] rounded-full bg-[#b8541e]/10 blur-3xl" />
        </div>

        <div className="relative max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4d9c3] text-[#b8541e] font-mono text-[10px] tracking-[0.15em] font-medium mb-6 uppercase">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#d9692a] animate-pulse" />
              <span>An AI agent for your pipeline</span>
            </div>

            <h1 className="font-display italic text-[clamp(40px,5.5vw,68px)] font-light leading-[1.02] tracking-[-0.035em] text-[#1f1b16]">
              Never lose <span className="text-[#d9692a]">a lead</span> again.
            </h1>

            <p className="mt-6 text-[18px] md:text-[20px] text-[#4a413a] leading-relaxed max-w-[560px]">
              Adowise sources prospects, crafts personalized outreach, qualifies leads, and helps book meetings—so you focus on closing deals.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-10">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('adowise-start');
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="relative overflow-hidden rounded-full bg-[#1f1b16] text-[#faf6f0] px-[38px] py-[22px] text-[17px] font-semibold tracking-[-0.005em] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] shadow-[0_10px_30px_rgba(31,27,22,0.12)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Launch the demo
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#d9692a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
              </button>

              <Link href="/demo" className="group">

                <button className="relative overflow-hidden rounded-full bg-[#fffcf6] text-[#1f1b16] border-2 border-[#1f1b16] px-[38px] py-[22px] text-[17px] font-semibold tracking-[-0.005em] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer">
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-[#faf6f0] transition-colors duration-300">
                    Book a demo
                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </span>
                  <div className="absolute inset-0 bg-[#1f1b16] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#fffcf6] border border-[#e1d7c5]">
                <Sparkles className="h-4 w-4 text-[#d9692a]" />
                <span className="text-[12px] font-medium text-[#4a413a]">AI that optimizes in real-time</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#fffcf6] border border-[#e1d7c5]">
                <Zap className="h-4 w-4 text-[#d9692a]" />
                <span className="text-[12px] font-medium text-[#4a413a]">From sourcing → scheduling</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#fffcf6] border border-[#e1d7c5]">
                <ShieldCheck className="h-4 w-4 text-[#d9692a]" />
                <span className="text-[12px] font-medium text-[#4a413a]">Qualification before meetings</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative">
            <div className="absolute -inset-2 bg-[radial-gradient(circle,rgba(217,105,42,0.14),transparent_60%)] blur-2xl" />
            <div className="relative bg-[#fffcf6] rounded-[32px] border border-[#ebe3d3] shadow-[0_30px_60px_-20px_rgba(31,27,22,0.12),0_12px_24px_rgba(31,27,22,0.06)] overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#d9692a] to-[#b8541e]" />

              <div className="p-6 md:p-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-[#e1d7c5] bg-[#faf6f0] flex items-center justify-center">
                      <Image src="/logo.png" alt="Adowise" width={48} height={48} className="object-contain" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#1f1b16]">Adowise Assistant</p>
                      <p className="text-[11px] text-muted-foreground">Pipeline Setup • Ready</p>
                    </div>
                  </div>

                  <div className="px-3 py-2 rounded-full bg-[#f4d9c3] text-[#b8541e] font-mono text-[10px] tracking-[0.12em] uppercase">
                    Live
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: "Find Leads",
                      desc: "Discover high-intent prospects across 12+ platforms.",
                    },
                    {
                      title: "Reach Out",
                      desc: "Personalized outreach runs on autopilot.",
                    },
                    {
                      title: "Qualify",
                      desc: "Only meeting-ready leads reach your calendar.",
                    },
                    {
                      title: "Book Meetings",
                      desc: "Auto-scheduling to keep momentum.",
                    },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="p-4 rounded-2xl border border-[#e1d7c5] bg-white/60"
                    >
                      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#8a7f72]">{step.title}</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-[#4a413a] font-medium">{step.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('adowise-start');
                      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="flex-1 rounded-full bg-[#d9692a] text-[#faf6f0] py-4 px-6 font-bold text-[14px] shadow-[0_10px_28px_rgba(217,105,42,0.32),0_2px_6px_rgba(217,105,42,0.18)] transition-all duration-300 hover:opacity-95 text-center"
                  >
                    Get started
                  </button>

                  <Link
                    href="/privacy"
                    className="flex-1 rounded-full border border-[#e1d7c5] bg-[#fffcf6] text-[#1f1b16] py-4 px-6 font-bold text-[14px] text-center"
                  >
                    Privacy-first
                  </Link>
                </div>


                <p className="mt-6 text-[12px] text-[#8a7f72] leading-relaxed">
                  You’re one click away from seeing the full flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple redirect landing */}
      <section id="adowise-start" className="px-4 lg:px-8 py-20 bg-background border-y border-[#e1d7c5]">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#f4d9c3] text-[#b8541e] font-mono text-[10px] tracking-[0.15em] font-medium mb-6 uppercase">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#d9692a] animate-pulse" />
            Get started
          </div>

          <h2 className="font-display italic text-[clamp(28px,4vw,46px)] font-light leading-[1.05] text-[#1f1b16] mb-4">
            Choose your tool
          </h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
            <a
              href="https://adowise-ai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 rounded-[32px] border border-[#1f1b16] bg-[#1f1b16] text-[#faf6f0] shadow-[0_10px_30px_rgba(31,27,22,0.14)] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src="/adowise-ai.png"
                  alt="Adowise AI"
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
              </div>

              <div className="p-6">
                <div className="text-[18px] font-bold">Adowise AI</div>
                <div className="text-[13px] font-medium opacity-90 mt-1">Live scraping tool</div>
              </div>
            </a>

            <a
              href="https://adowise-map.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 rounded-[32px] border border-[#e1d7c5] bg-[#fffcf6] text-[#1f1b16] shadow-[0_10px_30px_rgba(31,27,22,0.06)] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src="/adowise-map.png"
                  alt="Adowise Map"
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d9692a]/20 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="text-[18px] font-bold">Adowise Map</div>
                <div className="text-[13px] font-medium text-[#4a413a] mt-1">Google Maps client scraping</div>
              </div>
            </a>
          </div>
        </div>
      </section>



      {/* Divider */}
      <section className="px-4 lg:px-8 py-10 bg-[#f3ece0] border-y border-[#e1d7c5]">

        <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-6">

          {[
            { k: "Speed", v: "From launch to first qualified meeting within days." },
            { k: "Quality", v: "Qualification layer ensures meetings match your ICP." },
            { k: "Control", v: "Review strategy and keep the human in the loop." },
          ].map((x) => (
            <div key={x.k} className="bg-[#fffcf6] border border-[#e1d7c5] rounded-[24px] p-6">
              <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#8a7f72]">{x.k}</p>
              <p className="mt-3 text-[15px] font-medium text-[#4a413a] leading-relaxed">{x.v}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Floating button */}
      <button
        type="button"
        onClick={() => {
          const el = document.getElementById('adowise-start');
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 min-h-[32px] sm:min-h-[44px] rounded-full bg-[#d9692a] border border-black/10 shadow-[0_10px_30px_rgba(217,105,42,0.3)] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 hover:-translate-y-1 hover:shadow-2xl group"
      >

          <div className="relative h-4 w-4 sm:h-6 sm:w-6 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Adowise Logo"
              width={24}
              height={24}
              className="object-contain brightness-0 invert"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-[#faf6f0] text-[11px] sm:text-[14px] font-medium leading-tight whitespace-nowrap">Ask Adowise</span>
          </div>
        </button>
    </main>
  );
}


