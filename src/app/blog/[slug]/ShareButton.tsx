"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";

export function ShareButton({ title }: { title: string }) {
  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!", {
          style: {
            background: "#1f1b16",
            color: "#faf8f5",
            border: "1px solid #e1d7c5",
          },
        });
      } catch (err) {
        console.error("Error copying link:", err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="text-[#6b6b6b] hover:text-[#242424] transition-colors"
    >
      <Share2 size={20} />
    </button>
  );
}
