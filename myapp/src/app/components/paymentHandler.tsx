'use client'
import { useState } from "react";

const CheckoutPage: React.FC = (product) => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async (Product:any) => {
        setLoading(true);
        try {
            const response = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url; // Redirect to Stripe Checkout
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Stripe Hosted Checkout</h1>
            <button
                onClick={() =>handleCheckout(product)}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg"
                disabled={loading}
            >
                {loading ? "Redirecting..." : "Checkout"}
            </button>
        </div>
    );
};

export default CheckoutPage;