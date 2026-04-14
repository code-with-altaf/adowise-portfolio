import Blog from "@/components/Blog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getMessages } from "@/lib/i18n";
import { getAllBlogs } from "@/lib/markdown";

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const messages = await getMessages(lang);
    const t = messages.Blog || {};
    const seo = messages.SEO || {};

    return {
        title: t.title || "Blog | Adowise - Insights on Web Development, AI & SaaS",
        description: t.subtitle || "Stay updated with the latest insights on web development, AI integration, SaaS scalability, and digital transformation.",
        keywords: seo.keywords || "Adowise blog, web development blog, AI integration tips, SaaS development",
        alternates: {
            canonical: `https://adowise.in/${lang}/blog`,
        },
        openGraph: {
            title: t.title,
            description: t.subtitle,
            url: `https://adowise.in/${lang}/blog`,
            type: "website",
        }
    };
}

const BlogPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
    const { lang } = await params;
    const messages = await getMessages(lang);
    const breadcrumbs = messages.Breadcrumbs || {};
    const t = messages.Blog || {};

    // Load blogs from markdown files (exclude hidden SEO blogs from the list)
    const blogs = getAllBlogs(false);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": breadcrumbs.home || "Home",
                "item": `https://adowise.in/${lang}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": breadcrumbs.blog || "Blog",
                "item": `https://adowise.in/${lang}/blog`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumb
                pageName={t.title || "Blog"}
                description={t.subtitle || "Explore our latest thoughts, ideas, and insights."}
            />
            <Blog messages={messages} initialBlogs={blogs} />
        </>
    );
};

export default BlogPage;
