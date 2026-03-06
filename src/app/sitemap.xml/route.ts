import { NextResponse } from "next/server";
import blogData from "@/components/Blog/blogData";

export async function GET() {
  const baseUrl = "https://adowise.in";

  const pages = [
    "",
    "/about",
    "/pricing",
    "/contact",
    "/blog",
    "/policy",
    "/signin",
    "/signup",
    ...blogData.map((blog) => `/blog/${blog.id}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
      .map(
        (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === "" ? "1.0" : page === "/contact" || page === "/pricing" ? "0.9" : "0.8"}</priority>
  </url>
`
      )
      .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
