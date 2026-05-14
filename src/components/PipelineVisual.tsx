"use client";

import React, { forwardRef, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Globe, MessageSquare, Calendar, Zap, Mail, Search, Sparkles } from "lucide-react";
import { useMotionValue, useSpring, useTransform, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; onMouseEnter?: () => void; onMouseLeave?: () => void }
>(({ className, children, onMouseEnter, onMouseLeave }, ref) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref || typeof ref === "function" || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull (limited to 15px)
    mouseX.set(distanceX * 0.4);
    mouseY.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onMouseLeave?.();
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full bg-transparent p-3 transition-colors duration-300",
        className,
      )}
    >
      <motion.div style={{ x, y }} className="flex items-center justify-center w-full h-full">
        {children}
      </motion.div>
    </div>
  );
});

Circle.displayName = "Circle";

export function PipelineVisual({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = React.useState(false);
  const [isAutoAnimating, setIsAutoAnimating] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      if (!isHovered) {
        setIsAutoAnimating(true);
        setTimeout(() => setIsAutoAnimating(false), 2000);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const isActive = isHovered || isAutoAnimating;

  return (
    <div
      className={cn(
        "relative flex h-[600px] w-full items-center justify-center overflow-hidden p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-center justify-between gap-12">
        {/* Top: Results / Environment */}
        <div className="flex flex-row justify-center gap-6">
          <Circle ref={div7Ref} className="h-16 w-16 p-2">
            <Image
              unoptimized
              src="/chrome.png"
              alt="Chrome"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
          <Circle ref={div8Ref} className="h-16 w-16 p-2">
            <Image
              unoptimized
              src="/meet.png"
              alt="Meet"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
          <Circle ref={div9Ref} className="h-16 w-16 p-2">
            <Image
              unoptimized
              src="/calendar.png"
              alt="Calendar"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
          <Circle ref={div10Ref} className="h-16 w-16 p-2">
            <Image
              unoptimized
              src="/gemini.png"
              alt="Gemini"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
        </div>

        {/* Center: AI */}
        <div className="flex flex-col justify-center">
          <Link href="http://adowise-ai.vercel.app/" className="contents">
            <Circle 
              ref={div6Ref} 
              className={cn(
                "h-16 w-16 p-0 shadow-none cursor-pointer transition-all duration-500 overflow-visible relative",
                isActive && "bg-[#1f1b16]"
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                animate={{ 
                  rotate: isActive ? 360 : 0,
                  scale: isActive ? 1.2 : 1
                }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="relative z-20 flex items-center justify-center w-full h-full"
              >
                <AnimatePresence mode="wait">
                  {!isActive ? (
                    <motion.div
                      key="logo"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/logo.png"
                        alt="AI"
                        width={50}
                        height={18}
                        className="object-contain"
                        style={{ height: "auto" }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="stars"
                      initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles className="w-5 h-5 text-[#faf6f0]" fill="currentColor" strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Sparkle background elements on hover */}
              {isActive && (
                <div className="absolute inset-0 z-10">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-1 w-1 bg-[#d9692a] rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        x: (Math.random() - 0.5) * 60,
                        y: (Math.random() - 0.5) * 60,
                      }}
                      transition={{ 
                        duration: 0.8, 
                        repeat: Infinity, 
                        delay: i * 0.1,
                        ease: "easeOut" 
                      }}
                    />
                  ))}
                </div>
              )}
            </Circle>
          </Link>
        </div>

        {/* Bottom: Sources */}
        <div className="flex flex-row justify-center gap-6">
          <Circle ref={div1Ref} className="h-16 w-16 p-2">
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
          <Circle ref={div4Ref} className="h-16 w-16 p-2">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
          <Circle ref={div2Ref} className="h-16 w-16 p-2">
            <Image
              src="/x.png"
              alt="X"
              width={52}
              height={52}
              className="object-contain"
            />
          </Circle>
          <Circle ref={div5Ref} className="h-16 w-16 p-2">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
          <Circle ref={div3Ref} className="h-16 w-16 p-2">
            <Image
              src="/youtube.png"
              alt="YouTube"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
        </div>
      </div>

      {mounted && (
        <>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div6Ref}
            duration={3}
            curvature={20}
            gradientStartColor="#4285F4"
            gradientStopColor="#d9692a"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div8Ref}
            toRef={div6Ref}
            duration={3}
            curvature={10}
            gradientStartColor="#EA4335"
            gradientStopColor="#d9692a"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div9Ref}
            toRef={div6Ref}
            duration={3}
            curvature={-10}
            gradientStartColor="#FBBC05"
            gradientStopColor="#d9692a"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div10Ref}
            toRef={div6Ref}
            duration={3}
            curvature={-20}
            gradientStartColor="#8E75C2"
            gradientStopColor="#d9692a"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div1Ref}
            duration={3}
            curvature={-20}
            gradientStartColor="#d9692a"
            gradientStopColor="#0A66C2"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            duration={3}
            curvature={-10}
            gradientStartColor="#d9692a"
            gradientStopColor="#1877F2"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div2Ref}
            duration={3}
            curvature={0}
            gradientStartColor="#d9692a"
            gradientStopColor="#14A800"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div5Ref}
            duration={3}
            curvature={10}
            gradientStartColor="#d9692a"
            gradientStopColor="#E4405F"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div3Ref}
            duration={3}
            curvature={20}
            gradientStartColor="#d9692a"
            gradientStopColor="#1f1b16"
          />
        </>
      )}
    </div>
  );
}
