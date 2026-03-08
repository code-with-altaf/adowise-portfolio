import { NextResponse } from "next/server";

export async function GET() {
  const robots = `
User-agent: *
Allow: /

Sitemap: https://adowise.in/sitemap.xml
Sitemap: https://adowise.com/sitemap.xml
`;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
