
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { product, quantity } = body; // Get product & quantity

        // ✅ Calculate the discounted price if applicable
        const price = product.discountPercentage
            ? product.price * (1 - product.discountPercentage / 100)
            : product.price;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product.name,
                            images: product.imagePath ? [product.imagePath] : [],
                        },
                        unit_amount: Math.round(price * 100), // Convert to cents
                    },
                    quantity: quantity || 1, // Use quantity from request
                },
            ],
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success`,
            cancel_url: `${req.headers.get("origin")}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
