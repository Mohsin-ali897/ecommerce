"use client";

import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface CheckoutPageProps {
  product: Product;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product), // Send product details
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        throw new Error("Checkout URL not received.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to initiate checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Stripe Hosted Checkout</h1>
      <button
        onClick={handleCheckout}
        className={`bg-blue-500 text-white px-6 py-3 rounded-lg transition-all ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
        disabled={loading}
      >
        {loading ? "Redirecting..." : "Checkout"}
      </button>
    </div>
  );
};

export default CheckoutPage;
