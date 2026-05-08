"use client";
import React, { useState } from "react";
import { MessageCircle, Linkedin, Twitter, Share2, Check } from "lucide-react";
import { copyToClipboard } from "@/utils/clipboard";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      icon: <MessageCircle size={18} />,
      label: "WhatsApp",
      link: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      color: "hover:bg-green-600"
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:bg-blue-600"
    },
    {
      icon: <Twitter size={18} />,
      label: "X",
      link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "hover:bg-black"
    },
  ];

  const handleCopy = async () => {
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this program: ${title}`,
          url: url,
        });
      } catch (error) {
        // Fallback to copy if native share fails
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="flex items-center gap-1">
      {shareLinks.map((share) => (
        <a
          key={share.label}
          href={share.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full bg-white/70 text-soft-mauve-gray ${share.color} hover:text-white transition-all duration-200 hover:scale-110`}
          aria-label={`Share on ${share.label}`}
        >
          {share.icon}
        </a>
      ))}
      <button
        onClick={handleNativeShare}
        className="p-2 rounded-full bg-white/70 text-soft-mauve-gray hover:bg-elegant-rose hover:text-white transition-all duration-200 hover:scale-110"
        aria-label="Share or copy link"
      >
        {copied ? <Check size={18} /> : <Share2 size={18} />}
      </button>
    </div>
  );
}
