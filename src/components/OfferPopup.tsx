"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function OfferPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("offerPopupShown");
    if (shown) return;
    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("offerPopupShown", "true");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setVisible(false);

  const handleClaim = () => {
    close();
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-full max-w-[650px] z-10"
          >
            <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#CBD5FD] shadow-[0_30px_100px_rgba(0,0,0,0.3)] border-4 border-white">

              <div className="flex flex-col md:flex-row items-stretch">
                {/* Left side - Visual/Price */}
                <div className="bg-primary md:w-[40%] px-8 py-10 text-center relative overflow-hidden flex flex-col justify-center">
                  {/* Background Decor */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-[60px]"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#CBD5FD] rounded-full blur-[60px]"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.2em] text-white mb-4">
                      Limited Offer
                    </div>
                    
                    <h2 className="text-7xl font-black text-white tracking-tighter leading-none mb-2 drop-shadow-xl">
                      20%<span className="text-3xl align-top mt-3 inline-block">OFF</span>
                    </h2>
                    <p className="text-sm text-white/90 font-bold uppercase tracking-widest">
                      Special Deal
                    </p>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="md:w-[60%] px-8 py-8 flex flex-col justify-center text-left relative">
                  <button
                    onClick={close}
                    className="absolute top-4 right-4 rounded-full p-2 text-primary/50 hover:text-primary hover:bg-primary/10 transition-colors z-10"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <h3 className="text-2xl font-black text-zinc-900 mb-2 leading-tight">
                    Transform Your Digital Presence
                  </h3>
                  
                  <p className="text-zinc-700 text-sm font-medium leading-relaxed mb-6">
                    Get a professional, high-performance website at an exclusive discount. <span className="text-primary font-bold">One-time offer</span> for new projects.
                  </p>

                  <button
                    onClick={handleClaim}
                    className="group relative inline-flex items-center gap-3 w-full justify-center rounded-2xl bg-primary px-8 py-4 text-base font-black text-white shadow-[0_15px_30px_-10px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.6)] transition-all active:scale-[0.97] hover:-translate-y-1"
                  >
                    <span className="relative z-10">CLAIM MY DISCOUNT</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  </button>

                  <p className="mt-4 text-[9px] text-zinc-600 font-black uppercase tracking-widest text-center md:text-left">
                    * Valid for this week only
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </>
      )}
    </AnimatePresence>
  );
}
