// 'use client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// interface Product {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     discountPercentage?: number;
//     category: string;
//     stockLevel: number;
//     imageUrl?: string;
// }

// export default function CartPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
//     const items = Object.values(cart) as Product[];
//     setProducts(items);
//   }, []);

//   return (
//     <div className='flex flex-col p-5 gap-2'>
//       {products.map((product) => (
//         <div key={product.name} className='flex gap-5 border'>
//           <Image
//             // src={product.image}
//             src={product.imageUrl ? urlFor(product.imageUrl).url() : '/placeholder-image.png'}
//             alt={product.name}
//             height={100}
//             width={100}
//           />
//           <p className='text-2xl'>{product.name}</p>
//           <p className='text-lg'>{product.stockLevel}</p>
//           <p>{(product?.stockLevel || 1) * product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
//! 
// 'use client';
// import { urlFor } from '@/sanity/lib/image';

// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import Navbar from '../components/navbar';
// import { getCartItems, removeItem, updatedCartQuantity } from '../action/action';
// import Mainbanner from '../components/pagebanner';
// import Footer from '../components/footer';
// import Offers from '../components/offers';

// interface Product {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     discountPercentage?: number;
//     category: string;
//     stockLevel: number;
//     imageUrl?: string;
//     quantity: number; // Track quantity in cart
// }

// export default function CartPage() {
//     const [products, setProducts] = useState<Product[]>([]);

//     useEffect(() => {
//         loadCart();
//     }, []);

//     // ✅ Load cart from localStorage
//     const loadCart = () => {
//         const cart = JSON.parse(localStorage.getItem('cart') || '{}');
//         const items = Object.values(cart) as Product[];
//         setProducts(items);
//     };

//     // ✅ Remove item from cart
//     const removeFromCart = (productName: string) => {
//         const cart = JSON.parse(localStorage.getItem('cart') || '{}');
//         if (cart[productName]) {
//             delete cart[productName]; // Remove product
//             localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
//             loadCart(); // Refresh UI
//         }
//     };

//     return (
//         <div>
//             <Navbar/>       
//             <div className="container mx-auto p-6">
//             <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
//             {products.length > 0 ? (
//                 <div className="bg-white shadow-lg rounded-lg p-6">
//                     {products.map((product) => (
//                         <div key={product.name} className="flex items-center justify-between border-b py-4">
//                             <div className="flex items-center gap-4">
//                                 <Image
//                                     src={product.imageUrl ? urlFor(product.imageUrl).url() : '/placeholder-image.png'}
//                                     alt={product.name}
//                                     height={80}
//                                     width={80}
//                                     className="rounded-lg object-cover"
//                                 />
//                                 <div>
//                                     <p className="text-xl font-semibold">{product.name}</p>
//                                     <p className="text-gray-500">Quantity: {product.quantity}</p>
//                                     <p className="text-lg font-bold">${(product.quantity * product.price).toFixed(2)}</p>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={() => removeFromCart(product.name)}
//                                 className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
//             )}
//         </div>
//         </div>
 
//     );
// }
//!
// export default function CartPage() {
//     const [cartItem , setCartItem] = useState<Product[]>([]);
//     useEffect(()=>{
//         return setCartItem(getCartItems());
//     },[])
//     const HandleRemove =(id:string)=>{
//         removeItem(id)
//         setCartItem(getCartItems())
//     }
//    const HandleQuantity = (id:string, quantity:number) => {
//     updatedCartQuantity(id, quantity)
//     setCartItem(getCartItems())
//    }
//    const handleIncrement = (id:string)=>{
//     const product = cartItem.find((item) => item.id === id);
//     if(product){
//         updatedCartQuantity(id, product.stockLevel + 1)
//    }
// }
//    const handleDecrement = (id:string)=>{
//     const product = cartItem.find((item) => item.id === id);
//     if(product && product.quantity > 1){
//         updatedCartQuantity(id, product.stockLevel - 1)
//    }
//    const calculatedTotal = ()=>{
//     return cartItem.reduce((total, item)=> total + (item.price * item.quantity), 0)
//    }
// }

//     return (
//                 <div>
//                     <Navbar/>
//                     <Mainbanner pageName='Cart' />     
//                     <div className="container mx-auto p-6">
//                     <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
                    
//                         <div className="bg-white shadow-lg rounded-lg p-6">
//                             {cartItem.map((product:any) => (
//                                 <div key={product.name} className="flex items-center justify-between border-b py-4">
//                                     <div className="flex items-center gap-4">
//                                         <Image
//                                             src={product.imageUrl ? urlFor(product.imageUrl).url() : '/placeholder-image.png'}
//                                             alt={product.name}
//                                             height={80}
//                                             width={80}
//                                             className="rounded-lg object-cover"
//                                         />
//                                         <div>
//                                             <p className="text-xl font-semibold">{product.name}</p>
//                                             <p className="text-gray-500">Quantity: {product.quantity}</p>
//                                             <p className="text-lg font-bold">${(product.quantity * product.price).toFixed(2)}</p>
//                                         </div>
//                                     </div>
//                                     <button
//                                         onClick={()=>HandleRemove(e)}
//                                         className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     <Offers/>
//                     <Footer/>
                    
//                 </div>
//                 </div>
//             )
// }
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
