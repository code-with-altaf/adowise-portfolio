import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://adowise.com";

  // Static routes
  const staticRoutes = [
    { url: "", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/about-us", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
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
