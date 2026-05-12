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
              src="https://storage.googleapis.com/pe-portal-consumer-prod-wagtail-static/images/Chrome_Logo.width-1440.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=wagtail%40pe-portal-consumer-prod.iam.gserviceaccount.com%2F20260512%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260512T200416Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2cd6fd2984c8c6d856c9dfb45fec48536a3ac92f31233ad4637e99a43e694613fc84440589d4474fddd2c538f7c9c2f07222493e82767bb6800cdde3ff46a83664910f0fc503124777f81cf0c3cd0f4ff33df4b74b34d69351c98e4c41f10498c40defe5bffbe98c597734a287c7b5f83baf1226410cbf49734976515806817c60c4fd72190ab0ee723355907efdb1de814c5c99c913c756d7b3d953bc97e4d9d6e2a05aa552fc558c62112d067bb4c3ae606d7839d29c8a45bb1e55b6f116b6509f003ba0df33fe3b9721b8f1bdb925755a2716608a8a88a265cacc0098e68820e9f8cda1edd2e2e1c491ab5aac581f2056137d66db3ff62d10b44a5ecd32fd"
              alt="Chrome"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
          <Circle ref={div8Ref} className="h-16 w-16 p-2">
            <Image
              unoptimized
              src="https://storage.googleapis.com/pe-portal-consumer-prod-wagtail-static/images/Meet_logo.width-1440.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=wagtail%40pe-portal-consumer-prod.iam.gserviceaccount.com%2F20260512%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260512T200440Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=18c44eab1a1050f7940461ee758ac02118000e719df95c67bcad5d5876de04f9f5bc60ed842c802c054695cb890f64c1ed5829fd26e323b67e61c35189c38027d65886135609a11ce80dc3354479896df7b65920c6e407bb92d300733da686c922917611efa031b13cd0d9fd1a2c356d588ead47a29fb41ada3f380b810cc3464b0b2381cec5dfb912f06529ca7b36cec170b4ee3a359b3addb063278b44bd520a9844e2c7f44d1e0e0920312f1978be41574ac679f837d9f367c32abe310da9408a5e6aa06db7291db4ab6e4aed9262f1de0836d7d05e01354e6fa622cb35e03d98e81f013b8c1ed4fe1d0ab209b8479ea8b608cb0da9dfddc138b5f7d7a4ec"
              alt="Meet"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
          <Circle ref={div9Ref} className="h-16 w-16 p-2">
            <Image
              unoptimized
              src="https://storage.googleapis.com/pe-portal-consumer-prod-wagtail-static/images/logo_calendar_2020q4_color_1x_web_512dp.width-1440.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=wagtail%40pe-portal-consumer-prod.iam.gserviceaccount.com%2F20260512%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260512T200422Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=17ca56bb7b9e19ebd173f4bbbd28e9b01edf1208bbd613ee4f48480ac9d688b9b8836b70f3652c321af6fbaa8e8cf3224d22ac1546965d8294cebeed05f25b7e65c30021f4e6d0c886be9c0d90bb68f8972464b485c610b961e31ed0de9819c036d8d4b08603c496d585807582a9740e91b7013b17f143acb9bfbaf08733503adc5ec2358eb2be46292786d9ebe9a74a319783211cafaf333c01ab712200abbe1b65fef10f4d32c91e1d67f7c30cf662708b5c72fc324d34277e8fa7439f0789eb889f3425d45820893443ee23dec38fd8b2ab200e41ea3e662195df12f07b0f1c40f58fddd6e3ee02a10da0d35363d2dd665aeb9f6ee8c1db8877ee1b26193f"
              alt="Calendar"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
          <Circle ref={div10Ref} className="h-16 w-16 p-2">
            <Image
              unoptimized
              src="https://storage.googleapis.com/pe-portal-consumer-prod-wagtail-static/images/logo_gemini_2025_color_1x_web_512dp.width-1440.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=wagtail%40pe-portal-consumer-prod.iam.gserviceaccount.com%2F20260512%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260512T200421Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=2dc0d66abcc7d095dd557112c57797ef2e129eed5fce9ab570bce320d3dc96b2aa4105e78c10d057f7b77f76f62a32b7b041705249c23ec5eb884e26eac09ef031206b1177bdc9d835a1a043cdccf3f6e0a0d94c8236b723466aa0bb45d20895a5ea2abdc998870e248262b15754385063bdc7cadd54703374cb628dfcfcb26aa438db98775bae6bf3478476aa5e8e9e566f9d99541ca4f5480bc722e6583a88ee70109d1334b1c8078fe0632fde4731c9d2a84419f5fbd2b899c2b55461e2243896004df0048bc65a71a690b4c749da6c30c9ca8f7aed9b5907633a8b776dee00b61e051866feb08030abf0ae00a58a01b70074a5b4803ac4c15eed45e9e401"
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
                isHovered && "bg-[#1f1b16]"
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                animate={{ 
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.2 : 1
                }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="relative z-20 flex items-center justify-center w-full h-full"
              >
                <AnimatePresence mode="wait">
                  {!isHovered ? (
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
              {isHovered && (
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
              src="/automation.png"
              alt="Automation"
              width={40}
              height={40}
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
              src="/spider.png"
              alt="Spider"
              width={40}
              height={40}
              className="object-contain"
            />
          </Circle>
        </div>
      </div>

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
    </div>
  );
}
