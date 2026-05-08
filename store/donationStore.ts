import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DonationState {
  amount: number;
  customAmount: string;
  currency: "USD" | "INR";
  isRecurring: boolean;
  frequency: "monthly" | "yearly";
  setAmount: (amount: number) => void;
  setCustomAmount: (amount: string) => void;
  setCurrency: (currency: "USD" | "INR") => void;
  setIsRecurring: (isRecurring: boolean) => void;
  setFrequency: (frequency: "monthly" | "yearly") => void;
  reset: () => void;
}

export const useDonationStore = create<DonationState>()(
  persist(
    (set) => ({
      amount: 50,
      customAmount: "",
      currency: "USD" as "USD" | "INR",
      isRecurring: false,
      frequency: "monthly" as "monthly" | "yearly",
      setAmount: (amount) => set({ amount, customAmount: "" }),
      setCustomAmount: (customAmount) => {
        const num = parseFloat(customAmount);
        set({ customAmount, amount: isNaN(num) ? 0 : num });
      },
      setCurrency: (currency) => set({ currency }),
      setIsRecurring: (isRecurring) => set({ isRecurring }),
      setFrequency: (frequency) => set({ frequency }),
      reset: () => set({
        amount: 50,
        customAmount: "",
        currency: "USD" as "USD" | "INR",
        isRecurring: false,
        frequency: "monthly" as "monthly" | "yearly"
      }),
    }),
    { name: "kindonar-donation-store" }
  )
);
