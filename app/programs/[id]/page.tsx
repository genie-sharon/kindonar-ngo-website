import React from "react";
import { notFound } from "next/navigation";
import { getProgram } from "@/data/programData";
import { Heart } from "lucide-react";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { formatCurrency } from "@/utils/formatCurrency";

export default async function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const program = getProgram(id);
  if (!program) notFound();

  return (
    <div className="bg-soft-blush min-h-screen pt-20 pb-20">
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-cocoa/40 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-4">
            <span className="text-pearl-white/80 uppercase tracking-widest text-sm">{program.location}</span>
            <h1 className="clamp-text-5xl font-bold text-pearl-white text-balance">{program.title}</h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-blush-card rounded-3xl p-8 space-y-6">
              <h2 className="clamp-text-3xl font-bold text-rich-cocoa">About This Program</h2>
              <p className="text-soft-mauve-gray leading-relaxed">{program.description}</p>
              <p className="text-soft-mauve-gray leading-relaxed">Our team works directly with local communities to ensure every dollar creates maximum impact. We provide transparent reporting and regular updates to all donors.</p>
            </div>

            <div className="glass-blush-card rounded-3xl p-8 space-y-6">
              <h3 className="clamp-text-2xl font-bold text-rich-cocoa">Progress</h3>
              <div className="space-y-4">
                <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-champagne-gold rounded-full" style={{ width: `${program.progress}%` }} />
                </div>
                <div className="flex justify-between text-soft-mauve-gray">
                  <span>{program.progress}% Funded</span>
                  <span>{formatCurrency(program.raised, "USD")} Raised of {formatCurrency(program.goal, "USD")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-blush-card rounded-3xl p-8 space-y-6 sticky top-24">
              <h3 className="clamp-text-2xl font-bold text-rich-cocoa">Support This Program</h3>
              <Link href="/donate" className="magnetic-button w-full text-center block py-4">Donate Now</Link>
              <div className="flex items-center justify-between pt-4 border-t border-white/30">
                <span className="text-soft-mauve-gray">Share</span>
                <ShareButtons url={`${process.env.NEXT_PUBLIC_BASE_URL}/programs/${program.id}`} title={program.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
