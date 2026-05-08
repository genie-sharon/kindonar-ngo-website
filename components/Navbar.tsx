"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileOpen) {
      gsap.fromTo(mobileMenuRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    }
    return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/about", label: "Impact" },
    { href: "/donate", label: "Donate" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pearl-white/80 backdrop-blur-md border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-elegant-rose" fill="currentColor" />
            <span className="clamp-text-xl font-bold text-rich-cocoa">Kindonar</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-soft-mauve-gray hover:text-elegant-rose transition-colors font-medium">
                {link.label}
              </Link>
            ))}
            <Link href="/donate" className="magnetic-button text-sm px-6 py-3">Donate Now</Link>
          </div>

          <button className="md:hidden text-rich-cocoa" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-pearl-white/95 backdrop-blur-md border-t border-white/30">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-soft-mauve-gray hover:text-elegant-rose py-2 font-medium">
                {link.label}
              </Link>
            ))}
            <Link href="/donate" onClick={() => setMobileOpen(false)} className="block magnetic-button text-center text-sm px-6 py-3">Donate Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
