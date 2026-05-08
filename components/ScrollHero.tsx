"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Heart } from "lucide-react";
import { initParallax, initExpandingImage } from "@/utils/gsapHelpers";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current || !overlayRef.current || !titleRef.current || !contentRef.current) return;

    initParallax(imageRef.current, 0.3);
    initExpandingImage(imageRef.current, heroRef.current);
    initParallax(titleRef.current, 0.5);
    initParallax(contentRef.current, 0.2);

    gsap.to(overlayRef.current, {
      opacity: 0.3,
      ease: "none",
      scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
    });

    // Animate content in
    const children = contentRef.current.children;
    gsap.fromTo(children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out", delay: 0.3 });

    return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[800px] overflow-hidden">
      <img ref={imageRef} src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop" alt="Cinematic humanitarian scene" className="absolute inset-0 w-full h-full object-cover scale-110" />
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-rich-cocoa/40 to-rich-cocoa/10" />

      <div ref={contentRef} className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center opacity-0 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-pearl-white/90 text-sm uppercase tracking-widest px-4 py-2 rounded-full border border-white/20">
            <Heart className="w-4 h-4" fill="currentColor" />
            Trusted by 50,000+ donors worldwide
          </span>
        </div>

        <h1 ref={titleRef} className="clamp-text-6xl font-bold text-pearl-white mb-8 leading-tight text-balance">
          Your Generosity <br />
          <span className="text-champagne-gold">Changes Everything</span>
        </h1>

        <p className="clamp-text-xl text-pearl-white/90 max-w-3xl mb-10 text-balance leading-relaxed">
          Right now, communities across 12 countries are waiting for your help. Clean water, education,
          and hope that only your donation can provide. Every dollar creates real, measurable impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link href="/donate" className="magnetic-button px-12 py-5 text-xl font-semibold shadow-2xl">
            Donate Now - Make Impact Today
          </Link>
          <Link href="/programs" className="glass-card px-12 py-5 text-xl font-medium text-pearl-white hover:bg-white/20 transition-all rounded-full border border-white/30">
            See Where Your Money Goes
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-pearl-white/70">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>100% Transparent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Tax Deductible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Direct Impact</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-pearl-white/70" />
      </div>
    </section>
  );
}
