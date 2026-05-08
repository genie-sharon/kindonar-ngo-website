import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Session ID required" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent", "subscription"],
    });

    // Return relevant session details for the success page
    const sessionDetails = {
      id: session.id,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_email: session.customer_details?.email,
      payment_status: session.payment_status,
      metadata: session.metadata,
      created: session.created,
    };

    return NextResponse.json(sessionDetails);
  } catch (err) {
    console.error("Stripe session retrieval error:", err);
    return NextResponse.json({ error: "Failed to retrieve session" }, { status: 500 });
  }
}