import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://adowise.mohammdaltaf.dev";

  // Static routes
  const staticRoutes = [
    { url: "", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/about-us", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/careers", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/demo", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/privacy", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/terms", priority: 0.5, changeFrequency: "monthly" as const },
    // Local SEO pages — Paonta Sahib
    { url: "/paonta-sahib", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/paonta-sahib/schools", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/paonta-sahib/hotels", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/paonta-sahib/websites", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/paonta-sahib/digital-marketing", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/paonta-sahib/ai-automation", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/paonta-sahib/healthcare", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Dynamic blog routes
  const posts = await getBlogPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString() || new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...blogRoutes];
}
