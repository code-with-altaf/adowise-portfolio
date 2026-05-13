import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react";
import { getPostBySlug, getBlogPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      images: [post.image],
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts = await getBlogPosts();
  const relatedPosts = posts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#FAF8F5] flex flex-col selection:bg-[#d9692a]/10 selection:text-[#d9692a]">
      <Header />
      
      <div className="flex-1 pt-[100px] md:pt-[120px] pb-24">
        <article className="max-w-[700px] mx-auto px-6 md:px-0 mb-20">
          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#FFC017] p-1 rounded-sm">
                <svg width="12" height="12" viewBox="0 0 64 64" fill="none"><path d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195-1.194" fill="black"/></svg>
              </div>
              <span className="text-[13px] font-medium text-[#242424]">Adowise Intelligence</span>
            </div>
            
            <h1 className="text-[32px] md:text-[42px] font-bold text-[#242424] leading-[1.2] mb-4 tracking-tight font-body">
              {post.title}
            </h1>
            <h2 className="text-[18px] md:text-[22px] text-[#6b6b6b] leading-[1.3] font-medium mb-8 font-body">
              {post.subtitle}
            </h2>

            {/* Author Section */}
            <div className="flex items-center justify-between py-6 border-y border-[#f2f2f2] mb-10">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 relative rounded-full overflow-hidden shrink-0">
                  <Image src={post.authorAvatar} alt={post.author} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-bold text-[#242424] font-body">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] text-[#6b6b6b] font-body">
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <ShareButton title={post.title} />
              </div>
            </div>

            {/* Social Engagement Bar Top */}
            <div className="flex items-center justify-between py-3 border-b border-[#f2f2f2] mb-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[#6b6b6b]">
                  <Heart size={20} className="cursor-pointer hover:text-[#242424]" />
                  <span className="text-[13px] font-body">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-[#6b6b6b]">
                  <MessageCircle size={20} className="cursor-pointer hover:text-[#242424]" />
                  <span className="text-[13px] font-body">{post.comments}</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none prose-neutral font-body prose-headings:font-body prose-blockquote:border-[#d9692a] prose-blockquote:italic prose-pre:rounded-none prose-pre:bg-[#F9F9F9] prose-pre:border prose-pre:border-[#e5e5e5]">
              <MDXRemote 
                source={post.content} 
                components={{
                  h3: (props) => <h3 className="text-[24px] md:text-[30px] font-bold text-[#1f1b16] mb-6 mt-12 leading-tight" {...props} />,
                  blockquote: (props) => <blockquote className="border-l-4 border-[#d9692a] pl-6 my-10 italic text-[20px] md:text-[24px] text-[#242424]" {...props} />,
                  p: (props) => <p className="text-[18px] md:text-[20px] text-[#242424] leading-[32px] mb-8" {...props} />,
                  mark: (props) => <mark className="bg-[#d9692a]/10 text-[#d9692a] px-1" {...props} />,
                }}
              />
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="bg-[#f3ece0]/30 border-t border-[#e1d7c5] py-20">
            <div className="max-w-[1000px] mx-auto px-6">
              <h4 className="text-[14px] font-bold text-[#1f1b16] uppercase tracking-[0.2em] mb-10">Related Intelligence Briefs</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((rPost) => (
                  <Link key={rPost.slug} href={`/blog/${rPost.slug}`} className="group flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden mb-4 border border-[#e1d7c5]/50">
                      <Image src={rPost.image} alt={rPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h5 className="text-[16px] font-bold text-[#1f1b16] leading-snug group-hover:text-[#d9692a] transition-colors line-clamp-2">{rPost.title}</h5>
                    <p className="text-[12px] text-[#6b6b6b] mt-2 font-body line-clamp-2">{rPost.subtitle}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

// Client Component for Share Button
import { ShareButton } from "./ShareButton";
