"use client";

import { PipelineVisual } from "@/components/PipelineVisual";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import MagneticWrapper from "@/components/ui/magnetic-wrapper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  const [activeAct, setActiveAct] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isAutoPaused, setIsAutoPaused] = useState(false);

  // Auto-progress acts every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAutoPaused) {
        setActiveAct((prev) => (prev === 4 ? 1 : prev + 1));
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPaused]);

  return (
    <main className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-[80px] lg:pt-[140px] pb-[120px] px-4 lg:px-8 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4d9c3] text-[#b8541e] font-mono text-[10px] tracking-[0.15em] font-medium mb-8 uppercase">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#d9692a] animate-pulse" />
              <span className="lg:hidden">AI agent for your pipeline</span>
              <span className="hidden lg:inline">An AI agent for your sales pipeline</span>
            </div>
            <h1 className="hero-title mb-8">
              Never <span className="accent">Lose</span><br />
              <span className="soft">A Lead</span><br />
              <span className="accent italic-wonk">Again.</span>
            </h1>
            <p className="max-w-[540px] text-[18px] md:text-[20px] text-[#4a413a] leading-relaxed mb-10">
              Our AI does the sourcing, the talking, and the qualification — all so you can focus on closing deals.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-5 mb-12">
              <Link href="https://adowise-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="relative group overflow-hidden rounded-full bg-[#1f1b16] text-[#faf6f0] px-[38px] py-[22px] text-[17px] font-semibold tracking-[-0.005em] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] shadow-[0_10px_30px_rgba(31,27,22,0.12)] cursor-pointer">
                  <span className="relative z-10 flex items-center gap-2">
                    Get started free
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-[#d9692a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
                </button>
              </Link>

              <Link href="/demo">
                <button className="relative group overflow-hidden rounded-full bg-[#fffcf6] text-[#1f1b16] border-2 border-[#1f1b16] px-[38px] py-[22px] text-[17px] font-semibold tracking-[-0.005em] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer">
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-[#faf6f0] transition-colors duration-300">
                    Book a demo
                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </span>
                  <div className="absolute inset-0 bg-[#1f1b16] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-[11px] md:text-[13px] font-medium text-muted-foreground/80">
                Sourcing from
              </span>
              <AvatarCircles 
                numPeople={2000}
                avatarUrls={[
                  { imageUrl: "https://i.pravatar.cc/150?u=a", profileUrl: "#" },
                  { imageUrl: "https://i.pravatar.cc/150?u=b", profileUrl: "#" },
                  { imageUrl: "https://i.pravatar.cc/150?u=c", profileUrl: "#" },
                  { imageUrl: "https://i.pravatar.cc/150?u=d", profileUrl: "#" },
                ]}
              />
              <span className="text-[11px] md:text-[13px] italic text-muted-foreground/60">
                & top creator communities
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(217,105,42,0.08),transparent_70%)] blur-3xl" />
            <PipelineVisual className="relative z-10" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-[120px] bg-[#f3ece0] border-y border-[#e1d7c5] px-2 lg:px-8">
        <div className="max-w-[920px] mx-auto">
          {/* Story Head */}
          <div className="text-center mb-16">
            <div className="text-[12px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80 mb-4">
              The journey of a lead
            </div>
            <h2 className="font-display italic text-[clamp(32px,7vw,72px)] font-light leading-[1.1] md:leading-[1.02] tracking-[-0.03em] text-[#1f1b16] mb-6">
              <span className="whitespace-nowrap">Closing a customer,</span><br />
              <span className="text-[#d9692a]">in four acts.</span>
            </h2>
            <p className="max-w-[600px] mx-auto text-[18px] text-muted-foreground leading-relaxed">
              From an anonymous visitor to a qualified meeting booked directly in your calendar — all in under two hours.
            </p>
          </div>

          {/* Act Navigation */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-2 md:gap-4 mb-10">
            {[
              { num: 1, title: "Find Leads", icon: "Act I" },
              { num: 2, title: "Reach Out", icon: "Act II" },
              { num: 3, title: "Qualify", icon: "Act III" },
              { num: 4, title: "Book Meetings", icon: "Act IV" },
            ].map((act) => (
              <button
                key={act.num}
                onClick={() => {
                  setActiveAct(act.num);
                  setIsAutoPaused(true);
                }}
                className={cn(
                  "w-full md:w-auto px-3 md:px-6 py-4 md:py-3 rounded-2xl md:rounded-full text-[11px] md:text-[13px] font-bold uppercase tracking-[0.1em] md:tracking-widest transition-all duration-300",
                  activeAct === act.num
                    ? "bg-[#1f1b16] text-[#faf6f0] shadow-lg"
                    : "bg-[#f3ece0] text-[#1f1b16] hover:bg-[#e1d7c5]"
                )}
              >
                {act.title}
              </button>
            ))}
          </div>

          {/* Stage Window */}
          <div className="bg-[#fffcf6] rounded-[32px] border border-[#ebe3d3] overflow-hidden shadow-[0_1px_2px_rgba(31,27,22,0.04),0_20px_60px_rgba(31,27,22,0.06),0_60_120px_rgba(31,27,22,0.04)] min-h-[400px] lg:min-h-[520px] flex flex-col">
            {/* Stage Header */}
            <div className="flex items-center justify-between px-3 md:px-6 py-4 border-b border-[#ebe3d3] bg-[#fffcf6]">
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#ebe3d3]" />
                <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#ebe3d3]" />
                <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#ebe3d3]" />
              </div>
              <div className="text-[7px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-[#4a413a] uppercase whitespace-nowrap">
                ADOWISE · OPTIMIZING PIPELINE
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#ebe3d3]" />
              </div>
            </div>

            {/* Stage Body */}
            <div className="flex-1 overflow-hidden bg-[#fffcf6]">
              <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAct}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full px-3 py-6 md:p-10 overflow-hidden"
                  >
                  {activeAct === 1 && (
                    <div className="space-y-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e1d7c5] pb-6">
                        <div>
                          <h3 className="text-base md:text-xl font-bold text-[#1f1b16] font-display">Lead Discovery Engine</h3>
                          <p className="text-[12px] text-muted-foreground mt-1">Sourcing high-intent prospects across 12+ platforms</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="px-3 py-1.5 rounded-lg bg-[#1f1b16] text-[#faf6f0] text-[10px] font-bold uppercase tracking-wider">Scanned 12,402</div>
                          <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">342 New Today</div>
                        </div>
                      </div>
                      
                      <div className="overflow-x-hidden border border-[#d6cfc3] rounded-sm bg-white">
                        <Table className="overflow-x-hidden">
                          <TableHeader className="bg-[#f0e8db]">
                            <TableRow className="border-b border-[#d6cfc3] hover:bg-transparent">
                              <TableHead className="w-10 text-center text-[8px] font-mono font-bold text-[#8a7f72] border-r border-[#d6cfc3] h-8">#</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 border-r border-[#d6cfc3]">Prospect</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 border-r border-[#d6cfc3]">Match %</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 border-r border-[#d6cfc3] hidden md:table-cell">Professional Role</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 border-r border-[#d6cfc3] hidden sm:table-cell">Lead Source</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 text-right">Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {[
                              { name: "Sarah Jenkins", role: "VP of Sales", company: "CloudScale", source: "LinkedIn", match: "98.2" },
                              { name: "Marcus Thorne", role: "CEO", company: "NovaFin", source: "Crunchbase", match: "94.5" },
                              { name: "Elena Rodriguez", role: "Head of Marketing", company: "GrowthStack", source: "X", match: "91.8" },
                              { name: "David Chen", role: "Founder", company: "Nexus AI", source: "TechCrunch", match: "89.1" },
                              { name: "Sophie Lee", role: "Sales Director", company: "Vantage", source: "LinkedIn", match: "88.4" },
                              { name: "Oliver Grant", role: "COO", company: "SkyLogic", source: "Apollo", match: "87.9" },
                              { name: "Maya Patel", role: "Head of Growth", company: "StreamLine", source: "LinkedIn", match: "86.5" },
                              { name: "Lucas Vance", role: "Managing Director", company: "PrimeAsset", source: "Crunchbase", match: "85.2" },
                              { name: "Isabella Ortiz", role: "VP of Partnerships", company: "GlobalConnect", source: "LinkedIn", match: "84.9" },
                            ].map((lead, i) => (
                              <TableRow key={i} className={cn(
                                "border-b border-[#d6cfc3] hover:bg-transparent transition-none",
                                i % 2 === 1 ? "bg-[#faf8f5]" : "bg-white"
                              )}>
                                <TableCell className="py-1 text-center font-mono text-[9px] text-[#8a7f72] border-r border-[#d6cfc3]">
                                  {i + 1}
                                </TableCell>
                                <TableCell className="py-1 px-2 border-r border-[#d6cfc3]">
                                  <div className="flex items-center gap-1.5">
                                    <div className="h-5 w-5 shrink-0 rounded-sm bg-[#e1d7c5] flex items-center justify-center text-[#1f1b16] font-bold text-[8px]">
                                      {lead.name.charAt(0)}
                                    </div>
                                    <p className="text-[11px] font-semibold text-[#1f1b16] whitespace-nowrap">{lead.name}</p>
                                  </div>
                                </TableCell>
                                <TableCell className="py-1 px-2 border-r border-[#d6cfc3] font-mono text-[10px] text-primary font-bold">
                                  {lead.match}%
                                </TableCell>
                                <TableCell className="py-1 px-2 border-r border-[#d6cfc3] hidden md:table-cell">
                                  <p className="text-[10px] text-[#4a413a] whitespace-nowrap">{lead.role} @ {lead.company}</p>
                                </TableCell>
                                <TableCell className="py-1 px-2 border-r border-[#d6cfc3] hidden sm:table-cell font-mono text-[8px] text-[#8a7f72] uppercase tracking-tighter">
                                  {lead.source}
                                </TableCell>
                                <TableCell className="py-1 px-2 text-right">
                                  <p className="text-[9px] font-bold text-green-600 whitespace-nowrap uppercase tracking-tighter">Verified</p>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}

                  {activeAct === 2 && (
                    <div className="space-y-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e1d7c5] pb-6">
                        <div>
                          <h3 className="text-base md:text-xl font-bold text-[#1f1b16] font-display">Personalized Outreach</h3>
                          <p className="text-[12px] text-muted-foreground mt-1">Hyper-personalized sequences running on autopilot</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Active Sequence</span>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
                        <div className="bg-[#1f1b16] rounded-2xl md:rounded-3xl p-4 md:p-8 text-[#faf6f0] shadow-2xl relative overflow-hidden">
                          <div className="space-y-6 relative z-10">
                            <div className="flex items-center justify-between pb-6 border-b border-white/10">
                              <div className="flex items-center gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-[14px] font-bold">AI</div>
                                <div>
                                  <p className="text-[11px] font-bold uppercase tracking-widest text-primary">Subject Line</p>
                                  <p className="text-[14px] font-medium opacity-90">Question about CloudScale's outbound strategy</p>
                                </div>
                              </div>
                            </div>
                            <p className="text-[15px] leading-relaxed opacity-80 font-medium">
                              Hi Sarah,<br /><br />
                              I noticed your team recently expanded its sales pod. Most VPs at CloudScale are struggling with lead consistency during these growth spurts.<br /><br />
                              I've built a logic that handles the qualification part automatically. Would you be open to a 10-minute chat next Tuesday?<br /><br />
                              Best,<br />
                              Adowise Assistant
                            </p>
                            <div className="pt-6 flex flex-wrap gap-2">
                              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider">Personalized Intro</span>
                              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider">Dynamic Reference</span>
                              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider">A/B Tested</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a7f72] px-1">Campaign Performance</p>
                          {[
                            { label: "Open Rate", value: "72.4%", trend: "+5.2%" },
                            { label: "Reply Rate", value: "12.8%", trend: "+1.4%" },
                            { label: "Booked Rate", value: "4.2%", trend: "+0.8%" },
                          ].map((stat, i) => (
                            <div key={i} className="p-5 rounded-2xl border border-[#e1d7c5] bg-[#f3ece0]/30">
                              <p className="text-[11px] font-medium text-[#4a413a]">{stat.label}</p>
                              <div className="flex items-baseline gap-2 mt-1">
                                <p className="text-2xl font-bold text-[#1f1b16]">{stat.value}</p>
                                <span className="text-[10px] font-bold text-primary">{stat.trend}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeAct === 3 && (
                    <div className="space-y-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e1d7c5] pb-8">
                        <div>
                          <h3 className="text-base md:text-2xl font-bold text-[#1f1b16] font-display italic">Vetting Protocol</h3>
                          <p className="text-[14px] text-[#4a413a] mt-1">Applying your specific ICP criteria to every lead</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-[12px] font-bold uppercase tracking-wider text-[#1f1b16]">Vetting Active</span>
                        </div>
                      </div>

                      <div className="overflow-x-hidden border border-[#d6cfc3] rounded-sm bg-white">
                        <Table className="overflow-x-hidden">
                          <TableHeader className="bg-[#f0e8db]">
                            <TableRow className="border-b border-[#d6cfc3] hover:bg-transparent">
                              <TableHead className="w-10 text-center text-[8px] font-mono font-bold text-[#8a7f72] border-r border-[#d6cfc3] h-8">#</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 border-r border-[#d6cfc3]">Vetting Criteria</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 border-r border-[#d6cfc3]">Requirement Value</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 text-right">Result</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {[
                              { label: "Target Company Size", value: "50-200 Employees", status: "PASSED" },
                              { label: "Stakeholder Seniority", value: "Director or VP level", status: "PASSED" },
                              { label: "Technical Compatibility", value: "Salesforce / Hubspot ecosystem", status: "PASSED" },
                              { label: "Hiring Signals", value: "Active sales pod expansion", status: "PASSED" },
                              { label: "Geographic Fit", value: "North America Operations", status: "PASSED" },
                              { label: "Financial Health", value: "Series B+ or >$20M Revenue", status: "PASSED" },
                              { label: "Marketing Tech Stack", value: "Modern MarTech adoption", status: "PASSED" },
                              { label: "Growth Velocity", value: ">20% YoY Revenue Growth", status: "PASSED" },
                              { label: "Executive Presence", value: "Active LinkedIn thought leadership", status: "PASSED" },
                              { label: "Recent Funding", value: "Closed within last 12 months", status: "PASSED" },
                            ].map((check, i) => (
                              <TableRow key={i} className={cn(
                                "border-b border-[#d6cfc3] hover:bg-transparent transition-none",
                                i % 2 === 1 ? "bg-[#faf8f5]" : "bg-white"
                              )}>
                                <TableCell className="py-1 text-center font-mono text-[9px] text-[#8a7f72] border-r border-[#d6cfc3]">
                                  {i + 1}
                                </TableCell>
                                <TableCell className="py-1 px-2 border-r border-[#d6cfc3] font-bold text-[11px] text-[#1f1b16]">
                                  {check.label}
                                </TableCell>
                                <TableCell className="py-1 px-2 border-r border-[#d6cfc3] text-[11px] text-[#4a413a]">
                                  {check.value}
                                </TableCell>
                                <TableCell className="py-1 px-2 text-right">
                                  <p className="text-[9px] font-bold text-green-600 tracking-tighter">{check.status}</p>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                    </div>
                  )}

                  {activeAct === 4 && (
                    <div className="h-full flex flex-col justify-center">
                      <div className="overflow-x-hidden border border-[#d6cfc3] rounded-sm bg-white">
                        <Table className="overflow-x-hidden">
                          <TableHeader className="bg-[#f0e8db]">
                            <TableRow className="border-b border-[#d6cfc3] hover:bg-transparent">
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 border-r border-[#d6cfc3]">Prospect</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 border-r border-[#d6cfc3]">Date & Time</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 border-r border-[#d6cfc3]">Platform</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 border-r border-[#d6cfc3]">Briefing</TableHead>
                              <TableHead className="text-[9px] font-bold uppercase tracking-widest text-[#1f1b16] h-8 px-2 text-right">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {[
                              { name: "Sarah Jenkins", role: "VP of Sales", company: "CloudScale", date: "Oct 24", time: "10:00 AM", brief: "Act III vetting logic focus. Mutual connection found." },
                              { name: "Marcus Thorne", role: "CEO", company: "NovaFin", date: "Oct 25", time: "11:30 AM", brief: "Interested in ROI on cold outbound automation." },
                              { name: "Elena Rodriguez", role: "Head of Marketing", company: "GrowthStack", date: "Oct 25", time: "2:00 PM", brief: "Looking for multi-channel attribution logic." },
                              { name: "David Chen", role: "Founder", company: "Nexus AI", date: "Oct 26", time: "9:00 AM", brief: "Early stage pilot discussion for seed startups." },
                              { name: "Sophie Lee", role: "Sales Director", company: "Vantage", date: "Oct 27", time: "3:30 PM", brief: "Competitor switch-over analysis requested." },
                              { name: "James Wilson", role: "CFO", company: "SecurePay", date: "Oct 28", time: "1:15 PM", brief: "Cost-benefit analysis of manual vs AI sourcing." },
                            ].map((meeting, i) => (
                              <TableRow key={i} className={cn(
                                "border-b border-[#d6cfc3] hover:bg-transparent transition-none",
                                i % 2 === 1 ? "bg-[#faf8f5]" : "bg-white"
                              )}>
                                <TableCell className="py-2 px-2 border-r border-[#d6cfc3]">
                                  <div className="flex items-center gap-1.5">
                                    <div className="h-6 w-6 shrink-0 rounded-sm bg-[#f3ece0] flex items-center justify-center text-[#1f1b16] font-bold text-[9px]">
                                      {meeting.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                      <p className="text-[11px] font-bold text-[#1f1b16]">{meeting.name}</p>
                                      <p className="text-[9px] text-[#4a413a]">{meeting.role} @ {meeting.company}</p>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell className="py-2 px-2 border-r border-[#d6cfc3]">
                                  <div className="space-y-0.5">
                                    <p className="text-[11px] font-bold text-[#1f1b16]">{meeting.date}</p>
                                    <p className="text-[10px] font-medium text-primary">{meeting.time}</p>
                                  </div>
                                </TableCell>
                                <TableCell className="py-2 px-2 border-r border-[#d6cfc3]">
                                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#e1d7c5] bg-[#faf8f5] w-fit">
                                    <Image src="https://www.gstatic.com/images/branding/product/1x/meet_2020q4_48dp.png" alt="Meet" width={10} height={10} />
                                    <span className="text-[9px] font-bold text-[#1f1b16]">Meet</span>
                                  </div>
                                </TableCell>
                                <TableCell className="py-2 px-2 border-r border-[#d6cfc3] max-w-[200px]">
                                  <p className="text-[10px] text-[#4a413a] leading-tight italic truncate" title={meeting.brief}>
                                    "{meeting.brief}"
                                  </p>
                                </TableCell>
                                <TableCell className="py-2 px-2 text-right">
                                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none border border-[#1f1b16] text-[#1f1b16] font-bold text-[9px] cursor-pointer bg-transparent whitespace-nowrap">
                                    <Image src="https://www.gstatic.com/images/branding/product/1x/meet_2020q4_48dp.png" alt="Meet" width={8} height={8} />
                                    Join
                                  </button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Reveal/Contact Section */}
      <section className="relative py-20 lg:py-[160px] overflow-hidden bg-background">
        {/* Background Gradients */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(217,105,42,0.08)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,105,42,0.05)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-2 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Copy */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80">
                  Exclusive to clients
                </span>
              </div>
              
              <h2 className="font-display text-[clamp(36px,4.5vw,54px)] font-light leading-[1.05] tracking-[-0.025em] text-foreground">
                Every prospect,<br />
                <span className="italic font-serif text-primary">one tap away.</span>
              </h2>

              <p className="max-w-[480px] text-[17px] leading-[1.65] text-[#4a413a]">
                Even the leads Adowise didn't reach out to — you can see them. And with one click, reveal their email, phone, and full profile. Your pipeline is never gated.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  "See every prospect Adowise found, even beyond our top picks",
                  "Reveal verified contact info — email & phone — whenever you want",
                  "Ask Adowise to reach out on your behalf, or take the lead yourself",
                ].map((perk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary mt-1">
                      <span className="text-[10px]">✓</span>
                    </div>
                    <span className="text-[14px] text-[#4a413a] leading-relaxed">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Card */}
            <div className="relative group">
              <div className="bg-[#fffcf6] rounded-[24px] border border-[#ebe3d3] p-5 md:p-9 shadow-[0_30px_60px_-20px_rgba(31,27,22,0.15),0_12px_24px_rgba(31,27,22,0.06)] relative transition-transform duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:translate-y-[-8px]">
                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d9692a] to-[#b8541e] rounded-t-[24px]" />

                {/* Card Head */}
                <div className="flex items-center gap-3 md:gap-5 mb-10">
                  <div className="h-10 w-10 md:h-14 md:w-14 relative flex items-center justify-center shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Adowise Logo"
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 font-bold text-[16px] md:text-[18px] text-[#1f1b16]">
                      Adowise Assistant
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] md:text-[13px] text-muted-foreground mt-0.5">
                      <span>Pipeline Setup</span>
                      <span className="hidden md:inline h-1 w-1 rounded-full bg-muted-foreground/30" />
                      <span>Ready to start</span>
                    </div>
                  </div>
                </div>

                {/* Info Rows as Inputs */}
                <div className="space-y-5 mb-10">
                  {[
                    { label: "Your Name", type: "text", placeholder: "e.g. Sam Alt" },
                    { label: "Work Email", type: "email", placeholder: "sam@company.com" },
                    { label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000" },
                  ].map((row, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-4">
                      <div className="w-full md:w-24 text-[11px] md:text-[13px] font-medium text-muted-foreground/70 uppercase tracking-wider">
                        {row.label}
                      </div>
                      <div className="flex-1">
                        <input
                          type={row.type}
                          placeholder={row.placeholder}
                          className="w-full font-mono text-[13px] md:text-[14px] text-[#1f1b16] px-4 py-2.5 bg-[#faf6f0] border border-[#e1d7c5] rounded-[10px] focus:outline-none focus:border-primary/50 transition-all"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="relative w-full group/btn overflow-hidden rounded-full bg-gradient-to-br from-[#d9692a] to-[#b8541e] text-[#faf6f0] py-4 md:py-5 px-6 md:px-8 text-[14px] md:text-[16px] font-bold tracking-[-0.005em] shadow-[0_10px_28px_rgba(217,105,42,0.32),0_2px_6px_rgba(217,105,42,0.18)] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover/btn:scale-110">
                      <path d="M12.5 6.5V4.5C12.5 2.5 10.9 1 9 1S5.5 2.5 5.5 4.5v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <rect x="3" y="6.5" width="10" height="8.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="8" cy="10.5" r="1.2" fill="currentColor" />
                    </svg>
                    Start Your Pipeline
                  </span>
                  <div className="absolute inset-0 bg-[#1f1b16] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 lg:py-[140px] bg-[#f3ece0] border-y border-[#e1d7c5] px-2 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          {/* Pricing Head */}
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <div className="text-[12px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80 mb-4">
              Pricing
            </div>
            <h2 className="font-display italic text-[clamp(32px,5.5vw,68px)] font-light leading-[1.1] md:leading-[1.02] tracking-[-0.03em] text-[#1f1b16] mb-6">
              <span className="whitespace-nowrap">One fee. One time.</span><br />
              <span className="text-[#d9692a]">When you win.</span>
            </h2>
            <p className="text-[16px] md:text-[17px] text-[#4a413a] leading-relaxed px-4">
              Choose the plan that fits your business stage. Every plan includes our signature Adowise AI optimization to ensure your site actually converts visitors into leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-[1200px] mx-auto">
            {[
              {
                title: "Pipeline Foundation",
                badge: "THE SETUP",
                price: "25,000",
                subtext: "Essential AI setup for founders looking to kickstart their automated outreach journey.",
                features: [
                  "Custom High-Conversion Setup",
                  "Act I: Lead Sourcing Integration",
                  "Basic AI Assistant Training",
                  "CRM Data Synchronization",
                  "1 Month Pipeline Support",
                  "No hidden platform fees.",
                ],
                cta: "Build My Foundation",
                footer: "Ideal for startups and personal brands.",
              },
              {
                title: "Growth Engine",
                badge: "MOST POPULAR",
                price: "55,000",
                featured: true,
                subtext: "A full-scale automated sales engine designed to handle your entire pipeline on autopilot.",
                features: [
                  "End-to-End Act I-IV Automation",
                  "Act II: Hyper-Personalized Outreach",
                  "Act III: Smart Qualification Layer",
                  "Act IV: Automated Calendar Booking",
                  "Advanced Performance Tuning",
                  "Priority Pipeline Optimization",
                ],
                cta: "Launch My Engine",
                footer: "Perfect for scaling businesses and agencies.",
              },
              {
                title: "AI Infrastructure",
                badge: "CUSTOM SOLUTIONS",
                price: "120,000",
                subtext: "Bespoke AI solutions for organizations requiring deep custom integrations and dedicated agents.",
                features: [
                  "Unlimited Custom AI Agents",
                  "Full API & Tool Integrations",
                  "Act IV: Multi-Calendar Support",
                  "Dedicated Success Manager",
                  "White-glove Onboarding",
                  "Custom AI Persona Training",
                ],
                cta: "Contact Enterprise",
                footer: "Tailored for complex enterprise requirements.",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={cn(
                  "relative bg-[#fffcf6] border border-[#ebe3d3] rounded-[22px] p-8 md:p-[48px_40px] text-center flex flex-col items-center w-full max-w-[400px]",
                  plan.featured ? "shadow-[0_30px_60px_-20px_rgba(217,105,42,0.15)] ring-1 ring-[#d9692a]" : "shadow-[0_30px_60px_-20px_rgba(31,27,22,0.15),0_12px_24px_rgba(31,27,22,0.06)]"
                )}
              >
                {/* Badge */}
                <div className="inline-block px-[14px] py-[6px] bg-[#f4d9c3] text-[#b8541e] rounded-full font-mono text-[10px] tracking-[0.15em] font-medium mb-5 uppercase">
                  {plan.badge}
                </div>

                <h3 className="text-[22px] font-bold text-[#1f1b16] mb-1 font-display italic">{plan.title}</h3>

                {/* Price */}
                <div className="font-display italic text-[64px] md:text-[88px] font-light tracking-[-0.04em] leading-none my-5 text-[#1f1b16] relative z-10 flex items-baseline justify-center gap-1">
                  <span className="text-[13px] font-sans font-medium text-[#4a413a] opacity-60 uppercase mb-3 tracking-normal">just</span>
                  {plan.price}
                  <span className="text-[22px] font-sans font-bold text-[#d9692a] mb-3 tracking-normal">rs</span>
                </div>

                <div className="text-[14px] text-[#4a413a] leading-[1.5] mb-[28px] max-w-full md:max-w-[320px]">
                  {plan.subtext}
                </div>

                {/* Features */}
                <div className="w-full border-y border-[#ebe3d3] py-[24px] mb-[32px] flex flex-col gap-[12px] text-left">
                  {plan.features.map((feat, fi) => (
                    <div key={fi} className="text-[13.5px] text-[#1f1b16] flex items-center gap-3">
                      <div className="h-1 w-1 rounded-full bg-[#d9692a] shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={cn(
                  "inline-flex items-center justify-center gap-[10px] px-[32px] py-[16px] rounded-full text-[14px] font-medium transition-all duration-300 w-full cursor-pointer mt-auto",
                  plan.featured 
                    ? "bg-[#1f1b16] text-[#faf6f0] hover:bg-[#d9692a]" 
                    : "bg-[#1f1b16] text-[#faf6f0] hover:bg-[#d9692a]"
                )}>
                  {plan.cta} →
                </button>

                {/* Footer */}
                <div className="mt-[18px] text-[11px] color-[#8a7f72] opacity-60 italic">
                  {plan.footer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Founder Section */}
      <section className="relative py-20 lg:py-[120px] bg-[#f3ece0] border-t border-[#e1d7c5] px-2 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-center">
            {/* Left: Founder Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-[-20px] border border-[#d9692a]/10 rounded-full animate-spin-slow" />
                <div className="absolute inset-[-40px] border border-[#d9692a]/5 rounded-full animate-reverse-spin-slow" />
                <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full bg-gradient-to-br from-[#1f1b16] to-[#4a413a] flex items-center justify-center overflow-hidden border-4 border-[#faf6f0] shadow-2xl">
                  <Image
                    src="/founder.png"
                    alt="Mohammad Altaf - Founder"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right: Founder Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4d9c3] text-[#b8541e] font-mono text-[10px] tracking-[0.2em] font-medium uppercase">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-[#d9692a] animate-pulse" />
                  Behind the engine
                </div>
                <h2 className="font-display italic text-[clamp(40px,5vw,64px)] font-light leading-[1.1] tracking-[-0.03em] text-[#1f1b16]">
                  Mohammad <span className="text-[#d9692a]">Altaf</span>
                </h2>
                <p className="text-[18px] md:text-[20px] font-medium text-[#4a413a]">
                  Founder of Adowise & Full Stack Developer
                </p>
              </div>

              <p className="max-w-[600px] mx-auto lg:mx-0 text-[16px] md:text-[18px] text-[#4a413a] leading-relaxed italic">
                "Adowise wasn't just built to send emails. It was built to solve the hardest part of business—consistency. We're bridging the gap between AI potential and actual revenue growth."
              </p>

              {/* Affiliations/Experience */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#1f1b16] flex items-center justify-center p-2 border border-white/10 shadow-lg">
                    <Image 
                      src="/tradylytics.png" 
                      alt="Tradylytics Logo" 
                      width={32} 
                      height={32} 
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[14px] font-bold tracking-tight text-[#1f1b16]">Software Engineer at Tradylytics</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
                <button className="rounded-full bg-[#d9692a] text-[#faf6f0] px-8 py-5 text-[15px] font-bold shadow-xl hover:translate-y-[-2px] transition-all duration-300 cursor-pointer">
                  Schedule a Call
                </button>
                <div className="flex items-center gap-4">
                  <AvatarCircles 
                    numPeople={50}
                    avatarUrls={[
                      { imageUrl: "https://i.pravatar.cc/150?u=a", profileUrl: "#" },
                      { imageUrl: "https://i.pravatar.cc/150?u=b", profileUrl: "#" },
                      { imageUrl: "https://i.pravatar.cc/150?u=c", profileUrl: "#" },
                      { imageUrl: "https://i.pravatar.cc/150?u=d", profileUrl: "#" },
                    ]}
                  />
                  <span className="text-[13px] text-muted-foreground/80 font-medium">
                    Joined by 50+ founders this week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 lg:py-[120px] bg-background border-t border-[#e1d7c5] px-2 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-20">
            {/* FAQ Intro */}
            <div className="relative lg:sticky lg:top-32 h-fit mb-12 lg:mb-0 px-2 md:px-0">
              <div className="text-[12px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80 mb-4">
                Questions
              </div>
              <h2 className="font-display italic text-[52px] font-light leading-none tracking-[-0.025em] text-[#1f1b16] mb-6">
                Everything<br />
                <span className="text-[#d9692a]">you'd ask.</span>
              </h2>
              <p className="text-[15px] text-[#4a413a] leading-[1.6] max-w-[320px]">
                The honest answers. If you don't see yours here, drop us a line at{" "}
                <a href="mailto:info.adowise@gmail.com" className="text-[#d9692a] underline hover:text-[#b8541e] transition-colors">
                  info.adowise@gmail.com
                </a>.
              </p>
            </div>

            {/* FAQ List */}
            <div className="flex flex-col">
              {[
                {
                  q: "How is Adowise different from cold email tools?",
                  a: "Tools like Instantly or Lemlist require you to buy domains, set up technical records, and find your own leads. Adowise handles the entire pipeline: we find the prospects, verify their data, craft the strategy, and manage the outreach. You don't manage software; you manage results.",
                },
                {
                  q: "How much does Adowise cost?",
                  a: "We offer simple, transparent one-time plans starting at ₹10,000 for business websites and custom lead gen setups. No monthly subscriptions, no credit packs, and no hidden platform fees. You pay for the setup, and you own the pipeline.",
                },
                {
                  q: "How long until I get my first meeting?",
                  a: "Most campaigns start seeing positive responses within the first 48 hours of launch. Our AI optimizes your outreach in real-time, meaning your first qualified meeting usually lands within the first week of operation.",
                },
                {
                  q: "What if the leads are not qualified?",
                  a: "Our Smart Qualification layer (Act III) ensures that only leads who meet your specific criteria—budget, company size, and intent—ever reach your calendar. If a lead doesn't fit, our AI filters them out before you even see them.",
                },
                {
                  q: "Can I approve messages before they are sent?",
                  a: "Absolutely. You stay in the director's chair. You can review the outreach strategy, approve specific prospect lists, and even tweak the AI's 'voice' before a single message is sent.",
                },
                {
                  q: "What kind of integrations do you support?",
                  a: "Adowise integrates directly with your existing stack: HubSpot, Salesforce, Pipedrive, and Slack. We can also push booked meetings directly to your Google or Outlook calendar.",
                },
              ].map((item, i) => {
                const isOpen = activeFaq === i;
                return (
                  <div
                    key={i}
                    className="border-t border-[#e1d7c5] py-7 cursor-pointer group"
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                  >
                    <div className="flex justify-between items-start gap-6">
                      <div className={cn(
                        "text-[18px] font-medium transition-colors duration-300",
                        isOpen ? "text-[#d9692a]" : "text-[#1f1b16] group-hover:text-[#d9692a]"
                      )}>
                        {item.q}
                      </div>
                      <div className={cn(
                        "text-[24px] font-light transition-transform duration-300",
                        isOpen ? "rotate-45 text-[#d9692a]" : "text-muted-foreground"
                      )}>
                        +
                      </div>
                    </div>
                    <div className={cn(
                      "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                      isOpen ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <p className="text-[15px] text-[#4a413a] leading-[1.6] max-w-[600px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="border-t border-[#e1d7c5]" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
