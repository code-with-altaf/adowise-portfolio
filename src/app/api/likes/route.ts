import { NextRequest } from "next/server";
import { Redis } from "@upstash/redis";
import { getPostBySlug } from "@/lib/blog";

export const dynamic = "force-dynamic";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

function likesKey(slug: string) {
  return `adowise:blog:likes:${slug}`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug required" }), { status: 400 });
  }

  try {
    let likes = await redis.get<number>(likesKey(slug));

    // If no entry yet, seed it from frontmatter initial likes
    if (likes === null || likes === undefined) {
      let baseLikes = 0;
      try {
        const post = await getPostBySlug(slug);
        if (post && post.likes) {
          baseLikes = parseInt(post.likes, 10) || 0;
        }
      } catch (e) {}

      await redis.set(likesKey(slug), baseLikes);
      likes = baseLikes;
    }

    return new Response(JSON.stringify({ likes }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("[Likes GET Error]:", err.message);
    return new Response(JSON.stringify({ error: "Failed to fetch likes" }), { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { slug, action } = await req.json();

  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug required" }), { status: 400 });
  }

  try {
    const key = likesKey(slug);
    let currentLikes = await redis.get<number>(key);

    // Seed from frontmatter if first time
    if (currentLikes === null || currentLikes === undefined) {
      let baseLikes = 0;
      try {
        const post = await getPostBySlug(slug);
        if (post && post.likes) {
          baseLikes = parseInt(post.likes, 10) || 0;
        }
      } catch (e) {}
      currentLikes = baseLikes;
    }

    if (action === "like") {
      currentLikes = await redis.incr(key);
    } else if (action === "unlike") {
      currentLikes = await redis.decr(key);
      if (currentLikes < 0) {
        await redis.set(key, 0);
        currentLikes = 0;
      }
    }

    return new Response(JSON.stringify({ success: true, likes: currentLikes }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("[Likes POST Error]:", err.message);
    return new Response(JSON.stringify({ error: "Failed to update likes" }), { status: 500 });
  }
}
