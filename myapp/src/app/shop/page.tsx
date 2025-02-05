// import React from 'react'
// import Navbar from '../components/navbar'
// import Mainbanner from '../components/pagebanner'
// import Offers from '../components/offers'
// import Footer from '../components/footer'
// import { client } from '../../sanity/lib/client'
// import Link from 'next/link'
// import ProductData from '../constant/page'
// import { urlFor } from '@/sanity/lib/image'
// export default async function Shoppage() {
//   const query = `*[_type == "product"]{
//     id,
//     name,
//     description,
//     price,
//     "imageUrl": image.asset->url,
//     discountPercentage,

//   }`;
//   const products:ProductData[] = await client.fetch(query);

//   return (
//     <div>
      
//         <Navbar />
//         <Mainbanner pageName="Shop" />
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {products.map((product:any) => (
//         <Link href={`/shop/${product.id}`} 
//           key={product.id}
//           className="border rounded-lg shadow-lg p-4 bg-white"
//         >
//           {product.imageUrl && (
//             <img
//               src={product.imageUrl}
//               alt={product.title}
//               className="h-40 w-full object-cover rounded-t-lg"
//             />
//           )}
//           <h2 className="text-lg font-bold mt-2">{product.title}</h2>
//           <p className="text-sm text-gray-600">{product.description}</p>
//           <p className="text-lg font-semibold text-green-600 mt-2">
//             ${product.price}
//           </p>
//            {product.discountPercentage > 0 ? (
//               <>
//                 <p className="text-md text-gray-500 line-through">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 <p className="text-lg font-semibold text-green-600">
//                   ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}{' '}
//                   <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded-full">
//                       {product.discountPercentage}% off
//                   </span>

//                 </p>
//               </>
//             ) : (
//               <p className="text-lg font-semibold text-black">
//                 ${product.price.toFixed(2)}
//               </p>
//             )}
//         </Link>
//       ))}
//     </div>
//         <Offers/>
//         <Footer/>
//     </div>
//   )
// }
"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Mainbanner from "../components/pagebanner";
import Offers from "../components/offers";
import Footer from "../components/footer";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import ProductData from "../constant/page";
import Pagination from "../components/pagination";

export default function Shoppage() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const productsPerPage = 6; // Number of products to show per page

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"]{
        id,
        name,
        description,
        price,
        category,
        "imageUrl": image.asset->url,
        discountPercentage
      }`;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
      setTotalPages(Math.ceil(fetchedProducts.length / productsPerPage));
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, priceRange, products]);

  // Logic to handle the products based on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div>
      <Navbar />
      <Mainbanner pageName="Shop" />

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-black text-white rounded-md mb-4 shadow-lg gap-4">
  {/* Product Name Search Field */}
  <div className="w-full sm:w-auto flex items-center">
    <input
      type="text"
      placeholder="Search by product name..."
      className="w-full sm:w-64 p-2 rounded-md border-none focus:outline-none bg-white text-black shadow-md"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>

  {/* Price Range Filter */}
  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
    <span className="text-lg">Price:</span>
    <div className="flex items-center w-full sm:w-auto">
      <span className="text-sm">${priceRange[0]}</span>
      <input
        type="range"
        min="0"
        max="5000"
        value={priceRange[0]}
        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
        className="w-full sm:w-32 mx-2"
      />
      <input
        type="range"
        min="0"
        max="5000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        className="w-full sm:w-32 mx-2"
      />
      <span className="text-sm">${priceRange[1]}</span>
    </div>
  </div>
</div>


      {/* Product Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {currentProducts.map((product: ProductData) => (
          <Link
            href={`/shop/${product.id}`}
            key={product.id}
            className="border rounded-lg shadow-lg p-4 bg-white hover:bg-gray-100 transition-all"
          >
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-40 w-full object-cover rounded-t-lg"
              />
            )}
            <h2 className="text-lg font-bold mt-2 text-black">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold text-green-600 mt-2">
              ${product.price}
            </p>
            {(product.discountPercentage ?? 0) > 0 ? (
              <>
                <p className="text-md text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-lg font-semibold text-green-600">
                  ${(
                    product.price * (1 - product.discountPercentage / 100)
                  ).toFixed(2)}{" "}
                  <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded-full">
                    {product.discountPercentage}% off
                  </span>
                </p>
              </>
            ) : (
              <p className="text-lg font-semibold text-black">
                ${product.price.toFixed(2)}
              </p>
            )}
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      <Offers />
      <Footer />
    </div>
  );
}
