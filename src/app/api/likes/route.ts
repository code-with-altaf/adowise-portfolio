import { NextRequest } from "next/server";
import { getPostBySlug } from "@/lib/blog";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

// Global in-memory cache to handle concurrent warm invocations
const globalForLikes = globalThis as unknown as {
  likesCache: Record<string, number>;
};
globalForLikes.likesCache = globalForLikes.likesCache ?? {};

const DB_PATH = path.join("/tmp", "adowise-likes-db.json");

// Helper to load/save from disk persistent store
function loadDB(): Record<string, number> {
  try {
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, "utf-8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.warn("Failed to read likes DB:", e);
  }
  return {};
}

function saveDB(db: Record<string, number>) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
  } catch (e) {
    console.warn("Failed to write to likes DB:", e);
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug required" }), { status: 400 });
  }

  // Load persistent DB
  const db = loadDB();
  
  // If in cache or DB, use it
  if (globalForLikes.likesCache[slug] !== undefined) {
    return new Response(JSON.stringify({ likes: globalForLikes.likesCache[slug] }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (db[slug] !== undefined) {
    globalForLikes.likesCache[slug] = db[slug];
    return new Response(JSON.stringify({ likes: db[slug] }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // Fallback to frontmatter initial likes
  let baseLikes = 0;
  try {
    const post = await getPostBySlug(slug);
    if (post && post.likes) {
      baseLikes = parseInt(post.likes, 10) || 0;
    }
  } catch (e) {}

  db[slug] = baseLikes;
  saveDB(db);
  globalForLikes.likesCache[slug] = baseLikes;

  return new Response(JSON.stringify({ likes: baseLikes }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest) {
  const { slug, action } = await req.json();

  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug required" }), { status: 400 });
  }

  const db = loadDB();

  // Establish base count
  let currentLikes = 0;
  if (globalForLikes.likesCache[slug] !== undefined) {
    currentLikes = globalForLikes.likesCache[slug];
  } else if (db[slug] !== undefined) {
    currentLikes = db[slug];
  } else {
    try {
      const post = await getPostBySlug(slug);
      if (post && post.likes) {
        currentLikes = parseInt(post.likes, 10) || 0;
      }
    } catch (e) {}
  }

  // Increment or decrement
  if (action === "like") {
    currentLikes += 1;
  } else if (action === "unlike") {
    currentLikes = Math.max(0, currentLikes - 1);
  }

  // Save changes
  db[slug] = currentLikes;
  saveDB(db);
  globalForLikes.likesCache[slug] = currentLikes;

  return new Response(JSON.stringify({ success: true, likes: currentLikes }), {
    headers: { "Content-Type": "application/json" },
  });
}
