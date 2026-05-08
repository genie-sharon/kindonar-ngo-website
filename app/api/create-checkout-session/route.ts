import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, isRecurring, frequency } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const unitAmount = Math.round(amount * (currency === "USD" ? 100 : 100));

    let mode: "payment" | "subscription" = "payment";
    let priceData: any = {
      currency: currency.toLowerCase(),
      product_data: {
        name: "Kindonar Humanitarian Donation",
        description: "Supporting global humanitarian programs",
        images: ["https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=400&auto=format&fit=crop"],
      },
      unit_amount: unitAmount,
    };

    if (isRecurring) {
      mode = "subscription";
      priceData.recurring = {
        interval: frequency === "yearly" ? "year" : "month",
      };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: priceData,
          quantity: 1,
        },
      ],
      mode,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      customer_email: undefined, // Let Stripe collect email
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        donation_type: isRecurring ? "recurring" : "one-time",
        frequency: frequency || "one-time",
        currency: currency,
      },
      allow_promotion_codes: true,
      automatic_tax: {
        enabled: true,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
