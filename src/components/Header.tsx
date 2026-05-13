"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductItem {
  title: string;
  subtitle: string;
  useCases: string[];
}

const PRODUCTS_CONTENT: ProductItem[] = [
  {
    title: "Prospecting",
    subtitle: "AI-driven lead discovery",
    useCases: [
      "Real-time Lead Sourcing",
      "Deep Prospect Research",
      "Signal-based Targeting",
      "Verified Data Reveal",
    ],
  },
  {
    title: "Outreach",
    subtitle: "Personalized engagement",
    useCases: [
      "Multi-channel Sequences",
      "Hyper-personalized Messaging",
      "Smart Reply Handling",
      "Automated Follow-ups",
    ],
  },
  {
    title: "Qualification",
    subtitle: "Automated lead vetting",
    useCases: [
      "Intent Analysis",
      "Persona Matching",
      "Automated Qualification",
      "Meeting Scheduling",
    ],
  },
];

const PLATFORM_CONTENT = [
  {
    category: "Find & Research",
    subtitle: "Identify buyers, build context",
    sections: [
      {
        label: "DATA & LEAD GENERATION",
        items: [
          "Real-Time Company and Lead Database",
          "Live Web Search and AI Prospecting",
          "Lead Qualification",
          "Website Visitor Tracking",
          "Signals and Triggers",
        ],
      },
      {
        label: "RESEARCH & MESSAGING",
        items: ["Deep Research", "AI Personalization", "Playbooks", "Knowledge Base"],
      },
    ],
  },
  {
    category: "Engage & Convert",
    subtitle: "Outbound outreach, inbound handling",
    sections: [
      {
        label: "OUTREACH & WORKFLOWS",
        items: [
          "Multi-Channel Sequences",
          "Sequence Builder",
          "Smart Replies",
          "Multi-Lingual Outreach",
          "Consented Outbound Calling",
        ],
      },
      {
        label: "INBOUND HANDLING",
        items: ["AI Phone Agent", "Inbound Lead Qualification", "Intelligent Lead Routing"],
      },
    ],
  },
  {
    category: "Measure & Scale",
    subtitle: "Analytics, deliverability, integrations",
    sections: [
      {
        label: "ANALYTICS & DELIVERABILITY",
        items: [
          "Analytics",
          "Deliverability & Mailbox Health",
          "Call Deliverability & Number Management",
        ],
      },
      {
        label: "INTEGRATIONS",
        items: ["CRM Integration", "Slack Integration", "G2 Integration", "API"],
      },
    ],
  },
];

const SOLUTIONS_CONTENT = [
  {
    label: "COMPANY",
    items: [
      {
        title: "Growth",
        desc: "Scale pipeline faster than you can hire.",
      },
      {
        title: "Enterprise",
        desc: "Consolidate outbound, inbound, and qualification into one enterprise platform.",
      },
    ],
  },
  {
    label: "ROLE",
    items: [
      {
        title: "Sales",
        desc: "Automate prospecting & qualification with AI digital workers.",
      },
      {
        title: "Marketing & Growth",
        desc: "Turn demand into pipeline with AI digital workers.",
      },
      {
        title: "RevOps",
        desc: "Consolidate 20+ tools into one unified GTM engine.",
      },
    ],
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-5 backdrop-blur-lg bg-background/78 border-b",
        scrolled || isMenuOpen ? "border-[--line-soft]" : "border-transparent"
      )}
    >
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-12">
          <Link href="http://adowise-ai.vercel.app/" className="group flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Adowise Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          <NavigationMenu className="hidden lg:block" viewport={false}>
            {/* ... navigation menu items ... */}
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto p-0 !bg-transparent text-[14px] font-normal text-[#4A4131] hover:!bg-transparent hover:text-[#d9692a] data-[state=open]:!bg-transparent data-[state=open]:text-[#d9692a] focus:!bg-transparent transition-colors shadow-none cursor-pointer">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] grid grid-cols-2 gap-6 p-6 bg-[#F9F2EC]">
                    {PRODUCTS_CONTENT.map((worker) => (
                      <div key={worker.title} className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-[14px] font-bold text-foreground">{worker.title}</h3>
                          <p className="text-[11px] text-muted-foreground">{worker.subtitle}</p>
                        </div>
                        <div className="space-y-3">
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Use Cases</p>
                          <ul className="space-y-2">
                            {worker.useCases.map((useCase) => (
                              <li key={useCase} className="text-[12px] text-muted-foreground hover:text-[#d9692a] transition-colors cursor-pointer font-normal">{useCase}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto p-0 !bg-transparent text-[14px] font-normal text-[#4A4131] hover:!bg-transparent hover:text-[#d9692a] data-[state=open]:!bg-transparent data-[state=open]:text-[#d9692a] focus:!bg-transparent transition-colors shadow-none cursor-pointer">
                  Platform
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[750px] grid grid-cols-3 gap-6 p-6 bg-[#F9F2EC]">
                    {PLATFORM_CONTENT.map((col) => (
                      <div key={col.category} className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-[13px] font-bold text-foreground">{col.category}</h3>
                          <p className="text-[11px] text-muted-foreground">{col.subtitle}</p>
                        </div>
                        {col.sections.map((section) => (
                          <div key={section.label} className="space-y-3">
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">{section.label}</p>
                            <ul className="space-y-2">
                              {section.items.map((item) => (
                                <li key={item} className="text-[12px] text-muted-foreground hover:text-primary transition-colors cursor-pointer font-normal">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto p-0 !bg-transparent text-[14px] font-normal text-[#4A4131] hover:!bg-transparent hover:text-[#d9692a] data-[state=open]:!bg-transparent data-[state=open]:text-[#d9692a] focus:!bg-transparent transition-colors shadow-none cursor-pointer">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] grid grid-cols-2 gap-8 p-6 bg-[#F9F2EC]">
                    {SOLUTIONS_CONTENT.map((col) => (
                      <div key={col.label} className="space-y-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">{col.label}</p>
                        <ul className="space-y-4">
                          {col.items.map((item) => (
                            <li key={item.title} className="group cursor-pointer space-y-1">
                              <p className="text-[13px] font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                              <p className="text-[11px] text-muted-foreground leading-snug">{item.desc}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto p-0 !bg-transparent text-[14px] font-normal text-[#4A4131] hover:!bg-transparent hover:text-[#d9692a] data-[state=open]:!bg-transparent data-[state=open]:text-[#d9692a] focus:!bg-transparent transition-colors shadow-none cursor-pointer">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[180px] p-2 bg-[#F9F2EC] space-y-0.5">
                    {["About Us", "Careers"].map((item) => (
                      <NavigationMenuLink key={item} asChild className="flex w-full items-center px-3 py-2 rounded-lg text-[13px] font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-all cursor-pointer">
                        <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {["Pricing", "Blog", "FAQ"].map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink asChild className="text-[14px] font-normal text-[#4A4131] hover:text-[#d9692a] hover:!bg-transparent focus:!bg-transparent transition-colors duration-200 cursor-pointer">
                    <Link href={item === "Pricing" ? "#pricing" : item === "FAQ" ? "#faq" : `/${item.toLowerCase()}`}>{item}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden md:inline-flex rounded-[100px] border-[1px] border-[#e1d7c5] text-[#1f1b16] font-medium px-[18px] py-[9px] h-auto text-[13px] bg-transparent hover:bg-transparent hover:border-[#d9692a] hover:text-[#d9692a] transition-all duration-250 ease-in-out whitespace-nowrap shadow-none"
          >
            Get a demo
          </Button>
          <Button className="rounded-[100px] bg-[#d9692a] border-[1px] border-[#d9692a] text-[#faf6f0] font-semibold px-4 md:px-[20px] py-[9px] h-auto text-[12px] md:text-[13px] hover:opacity-90 transition-all duration-250 ease-in-out whitespace-nowrap shadow-none">
            Get started free
          </Button>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#4A4131] hover:text-[#d9692a] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-[#ebe3d3] shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="flex flex-col p-6 space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 px-2 mb-4">Navigation</p>
                
                {/* Products Accordion */}
                <div className="border-b border-black/5 pb-2">
                  <button 
                    onClick={() => setOpenMobileSection(openMobileSection === "products" ? null : "products")}
                    className="flex items-center justify-between w-full p-3 text-[15px] font-medium text-foreground"
                  >
                    Products
                    <ChevronRight className={cn("h-4 w-4 transition-transform", openMobileSection === "products" && "rotate-90")} />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "products" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-4 p-3 pt-1">
                          {PRODUCTS_CONTENT.map((p) => (
                            <div key={p.title} className="space-y-1.5">
                              <p className="text-[13px] font-bold text-primary">{p.title}</p>
                              <ul className="grid gap-1">
                                {p.useCases.slice(0, 3).map((u) => (
                                  <li key={u} className="text-[11px] text-muted-foreground">{u}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Platform Accordion */}
                <div className="border-b border-black/5 pb-2">
                  <button 
                    onClick={() => setOpenMobileSection(openMobileSection === "platform" ? null : "platform")}
                    className="flex items-center justify-between w-full p-3 text-[15px] font-medium text-foreground"
                  >
                    Platform
                    <ChevronRight className={cn("h-4 w-4 transition-transform", openMobileSection === "platform" && "rotate-90")} />
                  </button>
                  <AnimatePresence>
                    {openMobileSection === "platform" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-4 p-3 pt-1">
                          {PLATFORM_CONTENT.map((c) => (
                            <div key={c.category} className="space-y-1.5">
                              <p className="text-[13px] font-bold text-primary">{c.category}</p>
                              <p className="text-[11px] text-muted-foreground leading-tight">{c.subtitle}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Simple Links */}
                {["Pricing", "FAQ", "Blog"].map((item) => (
                  <Link
                    key={item}
                    href={item === "Pricing" ? "#pricing" : item === "FAQ" ? "#faq" : `/${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-3 text-[15px] font-medium text-foreground border-b border-black/5 last:border-0"
                  >
                    {item}
                    <ChevronRight className="h-4 w-4 text-muted-foreground/40" />
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-[#ebe3d3] flex flex-col gap-3">
                <Button className="w-full rounded-full bg-[#d9692a] py-6 text-[15px] font-bold">Get started free</Button>
                <Button variant="outline" className="w-full rounded-full border-[#e1d7c5] py-6 text-[15px] font-bold">Book a demo</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


