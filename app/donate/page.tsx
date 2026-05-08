"use client";
import React, { useState } from "react";
import { Heart, Check, Shield, CreditCard, Smartphone, Repeat, ArrowRight } from "lucide-react";
import { useDonationStore } from "@/store/donationStore";
import { formatCurrency } from "@/utils/formatCurrency";
import SecureBadge from "@/components/SecureBadge";

export default function DonatePage() {
  const {
    amount,
    currency,
    setAmount,
    setCurrency,
    customAmount,
    setCustomAmount,
    isRecurring,
    setIsRecurring,
    frequency,
    setFrequency
  } = useDonationStore();

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const predefinedAmounts = [25, 50, 100, 250, 500];

  const impactExamples = {
    25: "Provides meals for 5 children",
    50: "Funds school supplies for 10 students",
    100: "Builds clean water access for a family",
    250: "Supports vocational training for 2 women",
    500: "Creates sustainable farming for a community"
  };

  const handleCheckout = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setShowSuccess(true);
  };

  const handleContinue = () => {
    setShowSuccess(false);
    setAmount(0);
    setCustomAmount("");
  };

  return (
    <div className="bg-soft-blush min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heart className="w-16 h-16 text-elegant-rose mx-auto mb-6" fill="currentColor" />
          <h1 className="clamp-text-5xl font-bold text-rich-cocoa mb-6">Make An Impact</h1>
          <p className="clamp-text-xl text-soft-mauve-gray max-w-3xl mx-auto text-balance">
            Your donation funds education, clean water, and empowerment programs worldwide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div className="glass-blush-card rounded-3xl p-8 space-y-8">
              {/* Currency Selection */}
              <div className="flex gap-4">
                {["USD", "INR"].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr as "USD" | "INR")}
                    className={`flex-1 py-3 rounded-full font-medium transition-all ${
                      currency === curr
                        ? "bg-elegant-rose text-white shadow-lg"
                        : "bg-white/70 text-soft-mauve-gray hover:bg-white/80"
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>

              {/* Recurring Toggle */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-soft-mauve-gray font-medium">Make this a recurring donation</span>
                  <button
                    onClick={() => setIsRecurring(!isRecurring)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isRecurring ? "bg-elegant-rose" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isRecurring ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {isRecurring && (
                  <div className="flex gap-4">
                    {["monthly", "yearly"].map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setFrequency(freq as "monthly" | "yearly")}
                        className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${
                          frequency === freq
                            ? "bg-elegant-rose text-white"
                            : "bg-white/70 text-soft-mauve-gray hover:bg-white/80"
                        }`}
                      >
                        {freq.charAt(0).toUpperCase() + freq.slice(1)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Amount Selection */}
              <div className="space-y-4">
                <label className="text-sm text-soft-mauve-gray font-medium">Select Amount</label>
                <div className="grid grid-cols-3 gap-4">
                  {predefinedAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setAmount(amt)}
                      className={`py-3 rounded-full font-medium transition-all ${
                        amount === amt
                          ? "bg-elegant-rose text-white shadow-lg"
                          : "bg-white/70 text-soft-mauve-gray hover:bg-white/80"
                      }`}
                    >
                      {formatCurrency(amt, currency)}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="text-sm text-soft-mauve-gray mb-2 block">Or enter custom amount</label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 rounded-full bg-white/70 border border-white/30 focus:outline-none focus:border-elegant-rose focus:ring-2 focus:ring-elegant-rose/20 transition-all"
                    min="1"
                  />
                </div>
              </div>

              {/* Impact Preview */}
              {amount > 0 && (
                <div className="bg-champagne-glow/50 rounded-2xl p-4 border border-champagne-gold/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-5 h-5 text-elegant-rose" fill="currentColor" />
                    <span className="text-sm font-medium text-rich-cocoa">Your Impact</span>
                  </div>
                  <p className="text-soft-mauve-gray text-sm">
                    {impactExamples[amount as keyof typeof impactExamples] || `Supports humanitarian programs worldwide`}
                  </p>
                </div>
              )}

              {/* Total and Donate Button */}
              <div className="space-y-6">
                <div className="flex items-center justify-between pt-4 border-t border-white/30">
                  <span className="text-soft-mauve-gray">Total {isRecurring ? `(${frequency})` : ""}</span>
                  <span className="clamp-text-3xl font-bold text-rich-cocoa">{formatCurrency(amount, currency)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={loading || amount <= 0}
                  className={`magnetic-button w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all ${
                    loading ? "scale-95" : "hover:scale-105"
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5" fill="currentColor" />
                      Donate {isRecurring ? `${frequency} ` : ""}{formatCurrency(amount, currency)}
                    </>
                  )}
                </button>
              </div>

              <SecureBadge />
            </div>

            {/* Trust Indicators */}
            <div className="space-y-8">
              {/* Payment Methods */}
              <div className="glass-blush-card rounded-3xl p-6">
                <h3 className="text-lg font-bold text-rich-cocoa mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-elegant-rose" />
                  Secure Payment Methods
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <CreditCard className="w-6 h-6 text-soft-mauve-gray" />
                    <span className="text-sm text-soft-mauve-gray">Credit/Debit Cards</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <Smartphone className="w-6 h-6 text-soft-mauve-gray" />
                    <span className="text-sm text-soft-mauve-gray">Apple Pay</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <Smartphone className="w-6 h-6 text-soft-mauve-gray" />
                    <span className="text-sm text-soft-mauve-gray">Google Pay</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <Repeat className="w-6 h-6 text-soft-mauve-gray" />
                    <span className="text-sm text-soft-mauve-gray">Recurring Options</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="glass-blush-card rounded-3xl p-6">
                <h3 className="text-lg font-bold text-rich-cocoa mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-elegant-rose" />
                  Your Trust & Security
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-soft-mauve-gray">SSL Encrypted & Secure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-soft-mauve-gray">100% Tax Deductible</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-soft-mauve-gray">Direct Impact on Communities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-soft-mauve-gray">Transparent Financial Reporting</span>
                  </div>
                </div>
              </div>

              {/* Donor Assurance */}
              <div className="glass-blush-card rounded-3xl p-6 bg-gradient-to-br from-champagne-glow/30 to-soft-blush/50">
                <div className="text-center space-y-4">
                  <Heart className="w-12 h-12 text-elegant-rose mx-auto" fill="currentColor" />
                  <h3 className="text-lg font-bold text-rich-cocoa">Your Donation Matters</h3>
                  <p className="text-soft-mauve-gray text-sm leading-relaxed">
                    Every dollar goes directly to humanitarian programs. We maintain less than 5% administrative costs,
                    ensuring maximum impact for communities in need worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-gradient-to-br from-white via-soft-blush to-champagne-glow rounded-3xl shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-300 overflow-hidden">
            {/* Decorative Top */}
            <div className="h-1 bg-gradient-to-r from-elegant-rose via-champagne-gold to-elegant-rose"></div>

            {/* Content */}
            <div className="p-8 text-center space-y-6">
              {/* Success Checkmark */}
              <div className="flex justify-center">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-gradient-to-br from-elegant-rose/20 to-champagne-gold/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-elegant-rose to-champagne-gold flex items-center justify-center animate-in scale-100 duration-500">
                      <Check className="w-10 h-10 text-white" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <h2 className="clamp-text-3xl font-bold text-rich-cocoa">
                  Thank You!
                </h2>
                <p className="text-soft-mauve-gray leading-relaxed">
                  Your generous donation of <span className="font-bold text-elegant-rose">{formatCurrency(amount, currency)}</span> {isRecurring ? `every ${frequency}` : "is"} making a real difference.
                </p>
              </div>

              {/* Impact Statement */}
              <div className="bg-gradient-to-r from-champagne-glow/40 to-soft-blush/40 rounded-2xl p-4 border border-champagne-gold/30">
                <p className="text-sm text-rich-cocoa font-medium">
                  Your donation is already helping families get clean water, children access education, and communities build sustainable futures.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/70 rounded-xl p-3">
                  <div className="text-lg font-bold text-elegant-rose">2.5M+</div>
                  <div className="text-xs text-soft-mauve-gray">Lives Impacted</div>
                </div>
                <div className="bg-white/70 rounded-xl p-3">
                  <div className="text-lg font-bold text-elegant-rose">120+</div>
                  <div className="text-xs text-soft-mauve-gray">Countries</div>
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-elegant-rose to-champagne-gold hover:from-elegant-rose/90 hover:to-champagne-gold/90 text-white font-semibold py-4 rounded-full transition-all hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                Continue Exploring
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Reassurance */}
              <div className="flex items-center justify-center gap-2 text-xs text-soft-mauve-gray">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Your information is 100% secure</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
