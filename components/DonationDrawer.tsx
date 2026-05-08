"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Heart } from "lucide-react";
import { useDonationStore } from "@/store/donationStore";
import { formatCurrency } from "@/utils/formatCurrency";

gsap.registerPlugin(ScrollTrigger);

export default function DonationDrawer() {
  const { amount, currency, setAmount, setCurrency } = useDonationStore();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const predefinedAmounts = [25, 50, 100, 250, 500];

  useEffect(() => {
    if (!drawerRef.current) return;
    if (open) {
      gsap.fromTo(drawerRef.current, { y: "100%" }, { y: 0, duration: 0.5, ease: "power2.out" });
    }
    return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-8 right-8 z-40 magnetic-button rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
        <Heart className="w-6 h-6" fill="currentColor" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-rich-cocoa/50 backdrop-blur-sm flex items-end justify-center p-4" onClick={() => setOpen(false)}>
          <div ref={drawerRef} className="bg-soft-blush w-full max-w-md rounded-t-3xl p-8 space-y-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="clamp-text-2xl font-bold text-rich-cocoa">Quick Donate</h2>
              <button onClick={() => setOpen(false)}><X className="w-6 h-6 text-soft-mauve-gray" /></button>
            </div>

            <div className="flex gap-4">
              {["USD", "INR"].map((curr) => (
                <button key={curr} onClick={() => setCurrency(curr as "USD" | "INR")} className={`flex-1 py-3 rounded-full font-medium ${currency === curr ? "bg-elegant-rose text-white" : "bg-white/70 text-soft-mauve-gray"}`}>{curr}</button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {predefinedAmounts.map((amt) => (
                <button key={amt} onClick={() => setAmount(amt)} className={`py-3 rounded-full font-medium ${amount === amt ? "bg-elegant-rose text-white" : "bg-white/70 text-soft-mauve-gray"}`}>{formatCurrency(amt, currency)}</button>
              ))}
            </div>

            <div>
              <label className="text-sm text-soft-mauve-gray mb-2 block">Custom Amount</label>
              <input type="number" value={useDonationStore((s) => s.customAmount)} onChange={(e) => useDonationStore.getState().setCustomAmount(e.target.value)} placeholder="Enter amount" className="w-full px-4 py-3 rounded-full bg-white/70 border border-white/30 focus:outline-none focus:border-elegant-rose" />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/30">
              <span className="text-soft-mauve-gray">Total</span>
              <span className="clamp-text-2xl font-bold text-rich-cocoa">{formatCurrency(amount, currency)}</span>
            </div>

            <button onClick={() => { setOpen(false); }} className="w-full magnetic-button py-4 text-lg">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </>
  );
}
