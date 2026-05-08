"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingGlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: cardRef.current, start: "top 80%", toggleActions: "play none none reverse" }
    });
    return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, []);

  return <div ref={cardRef} className={`glass-blush-card rounded-3xl p-8 ${className}`}>{children}</div>;
}
