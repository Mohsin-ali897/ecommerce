"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdAdd, MdOutlineHorizontalRule } from "react-icons/md";
import { useUser, useClerk } from "@clerk/nextjs";
import { addTocart } from "../action/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// interface Product {
//   id: string ;
//   name: string ;
//   description: string ;
//   price: number ;
//   discountPercentage: number ;
//   category: string ;
//   stockLevel: number ;
//   imageUrl: string ;
//   quantity:number 
// }

// export default function ProductList({ product }: { product: Product }) { ti is original
export default function ProductList({ product }:any) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isSignedIn } = useUser();
  const { openSignUp } = useClerk();

  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  useEffect(() => {
    setTotalPrice(quantity * discountedPrice);
  }, [quantity, discountedPrice]);

  // ✅ Handle Add to Cart with Notification
  const handleCartBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await addTocart(product);
      toast.success(`${product.name} added to cart successfully! 🛒`, {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Failed to add product to cart. Please try again.");
    }
  };

  // ✅ Handle Checkout with Authentication Check
  const handleCheckOut = async () => {
    if (!isSignedIn) {
      openSignUp();
      return;
    }
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, quantity }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Checkout failed");
      }
    } catch (error) {
      toast.error("Checkout failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer />
      <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg">
        {product.imageUrl && (
          <Image
            src={urlFor(product.imageUrl).url()}
            alt={product.name}
            width={500}
            height={384}
            className="w-full h-96 object-cover rounded-lg"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 mt-4">{product.description}</p>

          <div className="mt-4">
            {product.discountPercentage ? (
              <>
                <p className="text-gray-500 line-through">${product.price.toFixed(2)}</p>
                <p className="text-xl font-semibold text-green-600">${discountedPrice.toFixed(2)}</p>
                <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded-full">
                  {product.discountPercentage}% off
                </span>
              </>
            ) : (
              <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
            )}
          </div>

          <div className={`flex justify-between mt-6 text-[16px] ${product.stockLevel > 0 ? "text-green-600" : "text-red-600"}`}>
            <span className="text-gray-700">Stock</span> {product.stockLevel > 0 ? `${product.stockLevel}` : "Out of Stock"}
          </div>

          {/* ✅ Quantity Controls */}
          <div className="flex items-center mt-6 space-x-4">
            <button
              className="bg-gray-300 px-4 py-2 rounded-lg disabled:opacity-50"
              disabled={quantity === 1}
              onClick={() => setQuantity((prev) => prev - 1)}
            >
              <MdOutlineHorizontalRule className="text-2xl" />
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              className="bg-gray-300 px-4 py-2 rounded-lg disabled:opacity-50"
              disabled={quantity >= product.stockLevel}
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <MdAdd className="text-2xl" />
            </button>
          </div>

          <div className="mt-4 text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</div>

          {/* ✅ Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleCartBtn}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleCheckOut}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg text-lg font-medium transition"
            >
              {isSignedIn ? "Buy Now" : "Sign Up to Buy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
