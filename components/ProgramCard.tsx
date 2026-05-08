"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Program } from "@/data/programData";
import ShareButtons from "./ShareButtons";
import { MapPin, Users, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramCard({ program }: { program: Program }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: cardRef.current, start: "top 80%", toggleActions: "play none none reverse" }
    });
    return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, []);

  const isUrgent = program.progress < 50;

  return (
    <div ref={cardRef} className="group relative glass-blush-card rounded-3xl overflow-hidden opacity-0 hover:shadow-2xl transition-all duration-300">
      {isUrgent && (
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Urgent
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-cocoa/40 via-transparent to-transparent" />

        {/* Overlay with program tags */}
        <div className="absolute top-4 right-4 flex gap-2">
          {program.tags.slice(0, 2).map(tag => (
            <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-soft-mauve-gray">
            <MapPin className="w-4 h-4" />
            <span>{program.location}</span>
          </div>
          <ShareButtons url={`${process.env.NEXT_PUBLIC_BASE_URL}/programs/${program.id}`} title={program.title} />
        </div>

        <h3 className="clamp-text-2xl font-bold text-rich-cocoa group-hover:text-elegant-rose transition-colors">
          {program.title}
        </h3>
        <p className="text-soft-mauve-gray text-sm line-clamp-3 leading-relaxed">{program.description}</p>

        <div className="space-y-3">
          <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-elegant-rose to-champagne-gold rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${program.progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-soft-mauve-gray">{program.progress}% Funded</span>
            <div className="flex items-center gap-1 text-elegant-rose">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">${new Intl.NumberFormat('en-US').format(program.raised)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link
            href={`/programs/${program.id}`}
            className="flex items-center gap-2 text-elegant-rose font-medium hover:gap-3 transition-all group/link"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover/link:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          <Link
            href={`/donate?program=${program.id}`}
            className="px-4 py-2 bg-elegant-rose text-white text-sm font-medium rounded-full hover:bg-elegant-rose/90 transition-all hover:shadow-lg"
          >
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
}
