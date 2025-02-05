"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Mainbanner from "../components/pagebanner";
import Offers from "../components/offers";
import Footer from "../components/footer";
import Pagination from "../components/pagination";
import { client } from "../../sanity/lib/client";

// ✅ Define Product Type
interface ProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  discountPercentage?: number;
}

export default function Shoppage() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

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
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1] &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [searchQuery, priceRange, products]);

  // ✅ Handle Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div>
      <Navbar />
      <Mainbanner pageName="Shop" />

      {/* ✅ Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-black text-white rounded-md mb-4 shadow-lg gap-4">
        {/* 🔍 Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full sm:w-64 p-2 rounded-md border-none focus:outline-none bg-white text-black shadow-md"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* 💰 Price Range Filter */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="text-lg">Price:</span>
          <div className="flex items-center">
            <span className="text-sm">${priceRange[0]}</span>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-32 mx-2"
            />
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-32 mx-2"
            />
            <span className="text-sm">${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* ✅ Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {currentProducts.map((product) => (
          <Link
            href={`/shop/${product.id}`}
            key={product.id}
            className="border rounded-lg shadow-lg p-4 bg-white hover:bg-gray-100 transition-all"
          >
            {product.imageUrl && (
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={250}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
            )}
            <h2 className="text-lg font-bold mt-2 text-black">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>

            {/* ✅ Pricing with Discount Handling */}
            {product.discountPercentage && product.discountPercentage > 0 ? (
              <div className="mt-2">
                <p className="text-md text-gray-500 line-through">${product.price.toFixed(2)}</p>
                <p className="text-lg font-semibold text-green-600">
                  ${((product.price * (1 - product.discountPercentage / 100))).toFixed(2)}
                  <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded-full ml-2">
                    {product.discountPercentage}% off
                  </span>
                </p>
              </div>
            ) : (
              <p className="text-lg font-semibold text-black mt-2">${product.price.toFixed(2)}</p>
            )}
          </Link>
        ))}
      </div>

      {/* ✅ Pagination */}
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
