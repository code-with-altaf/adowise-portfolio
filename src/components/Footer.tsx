import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer aria-label="Site footer" className="relative py-12 lg:py-20 bg-[#faf6f0] border-t border-[#e1d7c5] px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Brand Col - Full width on mobile */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Adowise Logo"
                width={120}
                height={30}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] md:text-[14px] text-[#4a413a] leading-relaxed max-w-[280px]">
              The AI-powered lead generation engine. Built with care to help businesses scale their pipeline effortlessly.
            </p>
          </div>

          {/* Product Col */}
          <div className="flex flex-col gap-3 md:gap-4">
            <h5 className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-[#1f1b16] mb-1">Product</h5>
            <Link href="#story" className="text-[13px] md:text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">How it works</Link>
            <Link href="#pricing" className="text-[13px] md:text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Pricing</Link>
            <Link href="#faq" className="text-[13px] md:text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">FAQ</Link>
          </div>

          {/* Solutions Col */}
          <div className="flex flex-col gap-3 md:gap-4">
            <h5 className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-[#1f1b16] mb-1">Solutions</h5>
            <Link href="#" className="text-[13px] md:text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Agencies</Link>
            <Link href="#" className="text-[13px] md:text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Sales Teams</Link>
            <Link href="#" className="text-[13px] md:text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Enterprise</Link>
          </div>

          {/* Company Col */}
          <div className="flex flex-col gap-3 md:gap-4 col-span-2 lg:col-span-1 mt-4 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-0 border-[#e1d7c5]/50 flex-row flex-wrap lg:flex-col justify-center lg:justify-start">
            <div className="w-full lg:w-auto mb-2 lg:mb-0 text-center lg:text-left">
              <h5 className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-[#1f1b16]">Company</h5>
            </div>
            <div className="flex flex-wrap justify-center lg:flex-col gap-x-6 gap-y-3">
              <Link href="mailto:info.adowise@gmail.com" className="text-[13px] md:text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Contact</Link>
              <Link href="/terms" className="text-[13px] md:text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Terms</Link>
              <Link href="/privacy" className="text-[13px] md:text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Privacy</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e1d7c5] flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] md:text-[12px] text-[#8a7f72]">
          <div className="text-center lg:text-left">© 2026 Adowise AI. All rights reserved.</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#1f1b16] transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-[#1f1b16] transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-[#1f1b16] transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
