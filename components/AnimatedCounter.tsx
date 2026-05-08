"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initCounterAnimation } from "@/utils/gsapHelpers";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ endValue, suffix = "", className = "" }: { endValue: number; suffix?: string; className?: string }) {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;
    initCounterAnimation(counterRef.current, endValue);
    return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, [endValue]);

  return <div ref={counterRef} className={className}>0{suffix}</div>;
}
