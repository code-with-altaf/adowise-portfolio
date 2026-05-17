"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface LikeButtonProps {
  slug: string;
  initialLikes: number;
}

export function LikeButton({ slug, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Load user's like status and sync global likes from server on mount
  useEffect(() => {
    // Check local storage for personal like status
    const likedPosts = JSON.parse(localStorage.getItem("adowise_liked_posts") || "{}");
    setHasLiked(!!likedPosts[slug]);

    // Fetch live global likes count
    fetch(`/api/likes?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.likes === "number") {
          setLikes(data.likes);
        }
      })
      .catch((err) => console.warn("Failed to fetch live likes:", err));
  }, [slug]);

  const handleLike = async () => {
    // Prevent double submissions during quick clicks
    if (isAnimating) return;

    setIsAnimating(true);
    const newHasLiked = !hasLiked;
    setHasLiked(newHasLiked);

    // Optimistically update UI count
    const delta = newHasLiked ? 1 : -1;
    setLikes((prev) => prev + delta);

    // Save to local storage
    const likedPosts = JSON.parse(localStorage.getItem("adowise_liked_posts") || "{}");
    if (newHasLiked) {
      likedPosts[slug] = true;
    } else {
      delete likedPosts[slug];
    }
    localStorage.setItem("adowise_liked_posts", JSON.stringify(likedPosts));

    // Send action to server API
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
      console.warn("Failed to sync likes with server:", err);
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-2 group focus:outline-none select-none cursor-pointer"
      title={hasLiked ? "Unlike post" : "Like post"}
    >
      <Heart
        size={20}
        className={`transition-all duration-300 ${
          hasLiked
            ? "text-[#E33E3E] fill-[#E33E3E] scale-110"
            : "text-[#6b6b6b] group-hover:text-[#242424] group-hover:scale-110"
        } ${isAnimating ? "animate-pulse" : ""}`}
      />
      <span
        className={`text-[13px] font-bold font-body transition-colors duration-200 ${
          hasLiked ? "text-[#E33E3E]" : "text-[#6b6b6b] group-hover:text-[#242424]"
        }`}
      >
        {likes}
      </span>
    </button>
  );
}
