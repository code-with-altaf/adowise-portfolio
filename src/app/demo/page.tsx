"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Check, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DemoPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const formStatusRef = useRef(formStatus);
  useEffect(() => {
    formStatusRef.current = formStatus;
  }, [formStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    setFormStatus('loading');
    try {
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
      } else {
        setFormStatus('idle');
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      setFormStatus('idle');
      console.error("Schedule error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F2EC] flex flex-col relative overflow-hidden">
      <Header />
      
      <div className="flex-1 pt-[140px] pb-24 px-4">
        <div className="max-w-[1100px] mx-auto">
          
          {/* Main Landscape Demo Section */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            
            {/* Left Content: The Pitch */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4d9c3] text-[#b8541e] font-mono text-[10px] tracking-[0.2em] font-medium uppercase">
                Limited Availability
              </div>
              
              <h1 className="font-display italic text-[48px] md:text-[64px] leading-[1.05] tracking-[-0.03em] text-[#1f1b16]">
                Scale your revenue<br />
                <span className="text-[#d9692a]">on autopilot.</span>
              </h1>
              
              <p className="text-[17px] text-[#4a413a] leading-relaxed max-w-[500px]">
                The Adowise Growth Engine handles the heavy lifting of lead discovery and qualification, so your team only talks to high-intent buyers. See how we turn cold discovery into booked meetings in four acts.
              </p>

              <div className="space-y-5 pt-4">
                {[
                  "Automate lead sourcing across 12+ premium platforms",
                  "Deploy hyper-personalized AI outreach that feels human",
                  "Configure smart protocols to vet every lead for your specific ICP"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 h-5 w-5 rounded-full bg-[#d9692a]/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-[#d9692a]" />
                    </div>
                    <span className="text-[15px] font-medium text-[#1f1b16]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: The Form Card */}
            <div className="relative group">
              <div className="bg-[#fffcf6] rounded-[32px] border border-[#ebe3d3] p-8 md:p-10 shadow-[0_30px_60px_-20px_rgba(31,27,22,0.15),0_12px_24px_rgba(31,27,22,0.06)] relative transition-transform duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d9692a] to-[#b8541e] rounded-t-[32px]" />

                {/* Card Head */}
                <div className="flex items-center gap-5 mb-10">
                  <div className="h-12 w-12 relative flex items-center justify-center shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Adowise Logo"
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[17px] text-[#1f1b16]">
                      Book a Strategy Demo
                    </div>
                    <p className="text-[12px] text-muted-foreground mt-0.5 uppercase tracking-widest font-medium">
                      Pipeline Experts
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground/70 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sam Alt"
                      className="w-full font-mono text-[14px] text-[#1f1b16] px-5 py-3 bg-[#faf6f0] border border-[#e1d7c5] rounded-[12px] focus:outline-none focus:border-[#d9692a]/50 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground/70 uppercase tracking-widest ml-1">Work Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sam@company.com"
                      className="w-full font-mono text-[14px] text-[#1f1b16] px-5 py-3 bg-[#faf6f0] border border-[#e1d7c5] rounded-[12px] focus:outline-none focus:border-[#d9692a]/50 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground/70 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="flex gap-2">
                      <div className="flex items-center justify-center px-4 bg-[#f3ece0] border border-[#e1d7c5] rounded-[12px] font-mono text-[14px] text-[#1f1b16] font-bold">
                        +91
                      </div>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="78766 37551"
                        className="flex-1 font-mono text-[14px] text-[#1f1b16] px-5 py-3 bg-[#faf6f0] border border-[#e1d7c5] rounded-[12px] focus:outline-none focus:border-[#d9692a]/50 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <button 
                      disabled={formStatus === 'loading'}
                      className="w-full bg-[#1f1b16] text-[#faf6f0] py-4 rounded-[14px] font-bold text-[15px] hover:bg-[#d9692a] disabled:bg-[#4a413a] transition-all flex items-center justify-center gap-2 group"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Request Access
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-center text-[11px] text-muted-foreground/60 italic">
                    By submitting, you agree to our <a href="/terms" className="underline">Terms</a> & <a href="/privacy" className="underline">Privacy</a>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Brands Section */}
          <div className="mt-24 pt-16 border-t border-[#e1d7c5]">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1f1b16]/30 text-center mb-10">TRUSTED BY TEAMS AT</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-20 gap-y-10 opacity-40 grayscale whitespace-nowrap">
              {["UNZORA", "TRADYLYTICS", "INTELXLABS", "VOGUEMESH", "SCRABBER", "TWITTAL"].map((brand) => (
                <div key={brand} className="text-[15px] md:text-[18px] font-bold text-[#1f1b16] tracking-[0.15em]">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {formStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#1f1b16]/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#faf6f0] border border-[#e1d7c5] rounded-[32px] p-8 md:p-10 max-w-sm w-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d9692a] to-[#b8541e]" />
              
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <motion.div 
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                    className="h-24 w-24 rounded-full bg-[#d9692a] flex items-center justify-center shadow-xl shadow-[#d9692a]/20"
                  >
                      <Check className="h-12 w-12 text-[#faf6f0]" strokeWidth={3.5} />
                  </motion.div>
                  
                  {[1, 2].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 0, scale: 2 }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                      className="absolute inset-0 rounded-full border-2 border-[#d9692a]"
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-[28px] font-display font-bold text-[#1f1b16] mb-3">Almost There!</h3>
              <p className="text-[#4a413a] text-[16px] leading-relaxed mb-8">
                Your strategy demo request is saved. Now, pick a time on the next screen to finalize our 30-min discovery call!
              </p>

              <button 
                onClick={() => {
                  const calendlyUrl = `https://calendly.com/reachmohdaltaf/30min?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`;
                  window.open(calendlyUrl, '_blank');
                  setFormStatus('idle');
                  setFormData({ name: "", email: "", phone: "" });
                }}
                className="w-full py-4 rounded-full bg-[#d9692a] text-[#faf6f0] font-bold text-[16px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Book My Demo
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
