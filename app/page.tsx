import React from "react";
import ScrollHero from "@/components/ScrollHero";
import ImpactStats from "@/components/ImpactStats";
import ProgramCard from "@/components/ProgramCard";
import FloatingGlassCard from "@/components/FloatingGlassCard";
import { programs } from "@/data/programData";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-soft-blush">
      <ScrollHero />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-elegant-rose uppercase tracking-widest text-sm font-medium">Our Impact</span>
          <h2 className="clamp-text-4xl font-bold text-rich-cocoa mt-4 mb-6">Measurable Change, Human Stories</h2>
          <p className="clamp-text-xl text-soft-mauve-gray max-w-3xl mx-auto text-balance">Every donation creates ripples of change across communities worldwide.</p>
        </div>

        <ImpactStats />

        <div className="mt-20">
          <div className="flex items-center justify-between mb-10">
            <h3 className="clamp-text-3xl font-bold text-rich-cocoa">Featured Programs</h3>
            <Link href="/programs" className="flex items-center gap-2 text-elegant-rose font-medium hover:gap-3 transition-all">
              <span>View All</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-champagne-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Heart className="w-16 h-16 text-elegant-rose mx-auto" fill="currentColor" />
            <h2 className="clamp-text-4xl font-bold text-rich-cocoa">Your Generosity Lights The Way</h2>
            <p className="clamp-text-xl text-soft-mauve-gray text-balance">Join thousands of changemakers funding education, clean water, and empowerment programs worldwide.</p>
            <Link href="/donate" className="magnetic-button inline-block px-12 py-5 text-xl">Donate Now</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pearl-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingGlassCard className="text-center p-12 max-w-4xl mx-auto">
            <h2 className="clamp-text-3xl font-bold text-rich-cocoa mb-6">Together, We Create Light</h2>
            <p className="text-soft-mauve-gray text-lg mb-8 text-balance">Every story matters. Every donation counts. Every light shines in the darkness.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-card px-6 py-3 rounded-full text-soft-mauve-gray text-sm">✅ 100% Transparent</div>
              <div className="glass-card px-6 py-3 rounded-full text-soft-mauve-gray text-sm">✅ Tax Deductible</div>
              <div className="glass-card px-6 py-3 rounded-full text-soft-mauve-gray text-sm">✅ Global Reach</div>
            </div>
          </FloatingGlassCard>
        </div>
      </section>
    </div>
  );
}
