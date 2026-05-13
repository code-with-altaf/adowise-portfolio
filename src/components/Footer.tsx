import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer aria-label="Site footer" className="relative py-[80px] pb-[40px] bg-[#faf6f0] border-t border-[#e1d7c5] px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Adowise Logo"
                width={140}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] text-[#4a413a] leading-relaxed max-w-[240px]">
              The AI-powered lead generation engine. Built with care to help businesses scale their pipeline effortlessly.
            </p>
          </div>

          {/* Product Col */}
          <div className="flex flex-col gap-4">
            <h5 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1f1b16] mb-2">Product</h5>
            <Link href="#story" className="text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">How it works</Link>
            <Link href="#pricing" className="text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Pricing</Link>
            <Link href="#faq" className="text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">FAQ</Link>
          </div>

          {/* For You Col */}
          <div className="flex flex-col gap-4">
            <h5 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1f1b16] mb-2">Solutions</h5>
            <Link href="#" className="text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">For Agencies</Link>
            <Link href="#" className="text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">For Sales Teams</Link>
            <Link href="#" className="text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Enterprise</Link>
          </div>

          {/* Company Col */}
          <div className="flex flex-col gap-4">
            <h5 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1f1b16] mb-2">Company</h5>
            <Link href="mailto:info.adowise@gmail.com" className="text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Contact</Link>
            <Link href="/terms" className="text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-[14px] text-[#4a413a] hover:text-[#d9692a] transition-colors">Privacy Policy</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e1d7c5] flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#8a7f72]">
          <div>© 2026 Adowise AI. All rights reserved.</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#1f1b16] transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-[#1f1b16] transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
