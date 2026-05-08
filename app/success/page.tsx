"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Heart, Mail, Receipt, Share2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { formatCurrency } from "@/utils/formatCurrency";

gsap.registerPlugin(ScrollTrigger);

interface SessionDetails {
  amount_total: number;
  currency: string;
  customer_email?: string;
  payment_status: string;
  metadata?: {
    donation_type?: string;
    frequency?: string;
  };
}

export default function SuccessPage() {
  const [sessionDetails, setSessionDetails] = useState<SessionDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSessionDetails = async () => {
      if (!sessionId) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/session-details?session_id=${sessionId}`);
        if (res.ok) {
          const data = await res.json();
          setSessionDetails(data);
        }
      } catch (error) {
        console.error("Failed to fetch session details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionDetails();
  }, [sessionId]);

  useEffect(() => {
    if (!cardRef.current || loading) return;
    gsap.fromTo(cardRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });

    if (iconRef.current) {
      gsap.fromTo(iconRef.current, { scale: 0 }, { scale: 1, duration: 0.6, ease: "back.out(1.7)", delay: 0.3 });
    }

    return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, [loading]);

  if (loading) {
    return (
      <div className="bg-soft-blush min-h-screen pt-20 pb-20 flex items-center justify-center">
        <div className="glass-blush-card rounded-3xl p-12 max-w-md text-center">
          <div className="w-12 h-12 border-4 border-elegant-rose/30 border-t-elegant-rose rounded-full animate-spin mx-auto mb-4" />
          <p className="text-soft-mauve-gray">Processing your donation...</p>
        </div>
      </div>
    );
  }

  const amount = sessionDetails ? sessionDetails.amount_total / 100 : 0;
  const currency = sessionDetails?.currency?.toUpperCase() || "USD";
  const isRecurring = sessionDetails?.metadata?.donation_type === "recurring";
  const frequency = sessionDetails?.metadata?.frequency || "one-time";

  return (
    <div className="bg-soft-blush min-h-screen pt-20 pb-20 flex items-center justify-center px-4">
      <div ref={cardRef} className="glass-blush-card rounded-3xl p-8 md:p-12 max-w-lg w-full text-center space-y-6 opacity-0">
        <div ref={iconRef} className="opacity-0">
          <div className="w-20 h-20 bg-champagne-gold/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-champagne-gold" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="clamp-text-4xl font-bold text-rich-cocoa">Thank You!</h1>
          <p className="text-soft-mauve-gray text-lg">
            Your {isRecurring ? `${frequency} ` : ""}donation has been processed successfully
          </p>
        </div>

        <div className="bg-champagne-glow/30 rounded-2xl p-6 border border-champagne-gold/20">
          <div className="text-3xl font-bold text-rich-cocoa mb-2">
            {formatCurrency(amount, currency as "USD" | "INR")}
          </div>
          <p className="text-soft-mauve-gray text-sm">
            {isRecurring ? `Recurring ${frequency}` : "One-time donation"}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 text-sm text-soft-mauve-gray">
            <Mail className="w-4 h-4" />
            <span>Receipt sent to {sessionDetails?.customer_email || "your email"}</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-sm text-soft-mauve-gray">
            <Heart className="w-4 h-4 text-elegant-rose" fill="currentColor" />
            <span>Your donation will create real change in communities worldwide</span>
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <Link href="/" className="magnetic-button w-full block py-4">
            Continue Exploring
          </Link>

          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/70 text-soft-mauve-gray rounded-full hover:bg-white/80 transition-all text-sm">
              <Receipt className="w-4 h-4" />
              View Receipt
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/70 text-soft-mauve-gray rounded-full hover:bg-white/80 transition-all text-sm">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/30">
          <p className="text-xs text-soft-mauve-gray">
            Questions? Contact us at{" "}
            <a href="mailto:support@kindonar.org" className="text-elegant-rose hover:underline">
              support@kindonar.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
