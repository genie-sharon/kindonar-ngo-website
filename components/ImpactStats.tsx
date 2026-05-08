"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import { initCounterAnimation } from "@/utils/gsapHelpers";
import { Heart, Globe, Users, Award, Shield, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 120,
    label: "Countries Reached",
    suffix: "+",
    icon: Globe,
    description: "Global humanitarian presence"
  },
  {
    value: 2.5,
    label: "Million Lives Impacted",
    suffix: "M+",
    icon: Heart,
    description: "People whose lives are better"
  },
  {
    value: 98,
    label: "Program Success Rate",
    suffix: "%",
    icon: Award,
    description: "Programs meeting goals"
  },
  {
    value: 5.1,
    label: "Admin Costs",
    suffix: "%",
    icon: Shield,
    description: "Industry-leading efficiency"
  },
];

const trustIndicators = [
  "100% of donations go to programs",
  "Independent financial audits",
  "Real-time program monitoring",
  "Community-led initiatives"
];

export default function ImpactStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!containerRef.current || !inView) return;
    const counters = containerRef.current.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const endValue = parseFloat(counter.getAttribute("data-value") || "0");
      initCounterAnimation(counter as HTMLElement, endValue);
    });

    // Animate stat cards
    const cards = containerRef.current.querySelectorAll(".stat-card");
    gsap.fromTo(cards, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" });

    return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, [inView]);

  return (
    <section className="py-20 bg-blush-gradient" ref={inViewRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Stats */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="stat-card glass-card p-6 rounded-3xl space-y-4 opacity-0 text-center hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-elegant-rose/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-elegant-rose" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="clamp-text-4xl font-bold text-elegant-rose counter" data-value={stat.value}>0</div>
                  <div className="text-rich-cocoa font-semibold text-sm">{stat.label}</div>
                  <div className="text-soft-mauve-gray text-xs">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-rich-cocoa mb-8">Why Donors Choose Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-3 justify-center p-4 bg-white/50 rounded-2xl">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-soft-mauve-gray text-sm font-medium">{indicator}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-blush-card rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="clamp-text-3xl font-bold text-rich-cocoa mb-4">
              Your Donation Creates Real Change
            </h3>
            <p className="text-soft-mauve-gray text-lg mb-6">
              Every dollar you give becomes meals for children, clean water for families,
              education for students, and hope for communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="magnetic-button px-8 py-4">
                Start Giving Today
              </a>
              <a href="/about" className="px-8 py-4 bg-white/70 text-soft-mauve-gray rounded-full hover:bg-white/80 transition-all font-medium">
                Learn Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
