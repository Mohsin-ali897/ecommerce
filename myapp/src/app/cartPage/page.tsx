
'use client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { getCartItems, removeItem } from '../action/action';
import Mainbanner from '../components/pagebanner';
import Footer from '../components/footer';
import Offers from '../components/offers';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    discountPercentage?: number;
    category: string;
    stockLevel: number;
    imageUrl?: string;
    quantity: number;
}

export default function CartPage() {
    const [cartItem, setCartItem] = useState<Product[]>([]);
    
    useEffect(() => {
        setCartItem(getCartItems());
    }, []);

    const handleRemove = (id: string) => {
        removeItem(id);
        setCartItem(getCartItems());
    };

    const calculatedTotal = () => {
        return cartItem.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div>
            <Navbar />
            <Mainbanner pageName='Cart' />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
                {cartItem.length > 0 ? (
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        {cartItem.map((product) => (
                            <div key={product.id} className="flex items-center justify-between border-b py-4">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={product.imageUrl ? urlFor(product.imageUrl).url() : '/placeholder-image.png'}
                                        alt={product.name}
                                        height={80}
                                        width={80}
                                        className="rounded-lg object-cover"
                                    />
                                    <div>
                                        <p className="text-xl font-semibold">{product.name}</p>
                                        <p className="text-gray-500">Price: ${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(product.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <div className="mt-6 text-right">
                            <p className="text-2xl font-semibold">Grand Total: ${calculatedTotal()}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
                )}
            </div>
            <Offers />
            <Footer />
        </div>
    );
}
