"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Lock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SecureBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!badgeRef.current) return;
    gsap.fromTo(badgeRef.current, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: badgeRef.current, start: "top 80%", toggleActions: "play none none reverse" }
    });

    const icon = badgeRef.current.querySelector(".pulse-icon");
    if (icon) {
      gsap.to(icon, { scale: 1.1, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut" });
    }

    return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, []);

  return (
    <div ref={badgeRef} className="flex flex-col sm:flex-row items-center gap-3 glass-card px-6 py-4 rounded-2xl">
      <div className="flex items-center gap-3">
        <div className="pulse-icon relative">
          <ShieldCheck className="w-6 h-6 text-champagne-gold" />
          <Lock className="w-3 h-3 text-champagne-gold absolute -top-1 -right-1" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium text-rich-cocoa">Secure Donation</div>
          <div className="text-xs text-soft-mauve-gray">Powered by Stripe</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-soft-mauve-gray">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        SSL Encrypted
      </div>
    </div>
  );
}
