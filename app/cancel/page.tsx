"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { XCircle } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CancelPage() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
    return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, []);

  return (
    <div className="bg-soft-blush min-h-screen pt-20 pb-20 flex items-center justify-center">
      <div ref={cardRef} className="glass-blush-card rounded-3xl p-12 max-w-md text-center space-y-6 opacity-0">
        <XCircle className="w-20 h-20 text-elegant-rose mx-auto" />
        <h1 className="clamp-text-4xl font-bold text-rich-cocoa">Donation Cancelled</h1>
        <p className="text-soft-mauve-gray">Your donation was not completed. You can try again anytime.</p>
        <Link href="/donate" className="magnetic-button w-full block py-4">Try Again</Link>
      </div>
    </div>
  );
}
