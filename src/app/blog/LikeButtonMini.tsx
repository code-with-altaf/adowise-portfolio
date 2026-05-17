"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface LikeButtonMiniProps {
  slug: string;
  initialLikes: number;
  size?: number;
  textSize?: string;
}

export function LikeButtonMini({ slug, initialLikes, size = 14, textSize = "text-[11px]" }: LikeButtonMiniProps) {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("adowise_liked_posts") || "{}");
    setHasLiked(!!likedPosts[slug]);

    fetch(`/api/likes?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.likes === "number") {
          setLikes(data.likes);
        }
      })
      .catch(() => {});
  }, [slug]);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAnimating) return;

    setIsAnimating(true);
    const newHasLiked = !hasLiked;
    setHasLiked(newHasLiked);
    setLikes((prev) => prev + (newHasLiked ? 1 : -1));

    const likedPosts = JSON.parse(localStorage.getItem("adowise_liked_posts") || "{}");
    if (newHasLiked) {
      likedPosts[slug] = true;
    } else {
      delete likedPosts[slug];
    }
    localStorage.setItem("adowise_liked_posts", JSON.stringify(likedPosts));

    try {
      const res = await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, action: newHasLiked ? "like" : "unlike" }),
      });
      const data = await res.json();
      if (typeof data.likes === "number") {
        setLikes(data.likes);
      }
    } catch (err) {
      console.warn("Failed to sync likes:", err);
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-1 group/like focus:outline-none select-none cursor-pointer"
      title={hasLiked ? "Unlike" : "Like"}
    >
      <Heart
        size={size}
        className={`transition-all duration-300 ${
          hasLiked
            ? "text-[#E33E3E] fill-[#E33E3E] scale-110"
            : "text-[#8a7f72] group-hover/like:text-[#d9692a] group-hover/like:fill-current"
        } ${isAnimating ? "animate-pulse" : ""}`}
      />
      <span
        className={`${textSize} font-bold transition-colors duration-200 ${
          hasLiked ? "text-[#E33E3E]" : "text-[#1f1b16]"
        }`}
      >
        {likes}
      </span>
    </button>
  );
}
