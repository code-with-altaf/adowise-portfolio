import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligence Brief",
  description: "Advanced insights into AI integration, software engineering, and the future of enterprise growth.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-[#faf8f5] flex flex-col selection:bg-[#d9692a]/10 selection:text-[#d9692a]">
      <Header />
      
      <div className="flex-1 pt-[100px] md:pt-[120px] pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-[16px] md:text-[20px] font-display italic text-[#1f1b16] tracking-tight">
              The Intelligence <span className="text-[#d9692a]">Brief</span>
            </h1>
          </div>

          {/* Blog Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16 w-full">
              {posts.map((post) => (
                <article key={post.slug} className="group flex flex-col md:max-w-none">
                  {/* Mobile Layout (Side-by-Side) */}
                  <div className="md:hidden flex flex-col gap-3 py-4 border-b border-[#e1d7c5]/30 last:border-0">
                    {/* Author Row */}
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-5 w-5 relative overflow-hidden rounded-full shrink-0">
                        <Image src={post.authorAvatar} alt={post.author} fill className="object-cover" />
                      </div>
                      <span className="text-[12px] font-bold text-[#1f1b16]">{post.author}</span>
                      <span className="text-[12px] text-[#8a7f72]">·</span>
                      <span className="text-[11px] font-medium text-[#8a7f72]">{post.date}</span>
                    </div>

                    {/* Content Row */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-1 min-w-0">
                        <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-[16px] font-bold text-[#1f1b16] leading-[1.3] mb-2 line-clamp-3">
                            {post.title}
                          </h2>
                        </Link>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="relative h-20 w-20 shrink-0 overflow-hidden border border-[#e1d7c5]/50 shadow-sm"
                      >
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                      </Link>
                    </div>

                    {/* Interaction Row */}
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-4 text-[#8a7f72]">
                        <div className="flex items-center gap-1">
                          <Heart size={14} />
                          <span className="text-[11px] font-bold">{post.likes}</span>
                        </div>
                        <span className="text-[11px]">{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout (Existing Vertical) */}
                  <div className="hidden md:flex flex-col flex-1">
                    {/* Image Section */}
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="block relative aspect-[16/9] overflow-hidden rounded-none mb-6 shadow-sm border border-[#e1d7c5]/50"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>

                    {/* Content Section */}
                    <div className="flex flex-col flex-1 px-1">
                      <Link href={`/blog/${post.slug}`} className="group/title">
                        <h2 className="text-[16px] md:text-[18px] font-bold text-[#1f1b16] leading-[1.4] mb-4 group-hover/title:text-[#d9692a] transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>

                      {/* Author Section */}
                      <div className="flex items-center gap-3 mt-auto mb-6">
                        <div className="h-8 w-8 relative overflow-hidden rounded-none border border-[#e1d7c5]/50 shrink-0">
                          <Image
                            src={post.authorAvatar}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[12px] font-bold text-[#1f1b16] leading-tight truncate">
                            {post.author}
                          </p>
                          <p className="text-[9px] text-[#8a7f72] font-semibold truncate uppercase tracking-[0.1em]">
                            {post.authorTitle}
                          </p>
                        </div>
                      </div>

                      {/* Meta Footer */}
                      <footer className="mt-auto pt-4 border-t border-[#e1d7c5] flex items-center justify-between">
                        <span className="text-[11px] font-medium text-[#8a7f72]">
                          {post.date}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button className="flex items-center justify-center text-[#8a7f72] hover:text-[#d9692a] transition-all group/like">
                            <Heart size={16} className="group-hover/like:fill-current" />
                          </button>
                          <span className="text-[11px] font-bold text-[#1f1b16]">
                            {post.likes}
                          </span>
                        </div>
                      </footer>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
