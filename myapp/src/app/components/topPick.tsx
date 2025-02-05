import React from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ Import Product Images
import pic1 from "../assets/topPick1.png";
import pic2 from "../assets/topPick2.png";
import pic3 from "../assets/topPick3.png";
import pic4 from "../assets/topPick4.png";

export default function TopPick() {
  const topPicks = [
    { image: pic1, description: "Trenton Modular Sofa - 3 Seater" },
    { image: pic2, description: "Granite Dining Table with Chairs" },
    { image: pic3, description: "Outdoor Bar Table & Stools" },
    { image: pic4, description: "Plain Console with Teak Mirror" },
  ];

  return (
    <div className="bg-white px-6 py-12">
      {/* ✅ Section Header */}
      <div className="w-full flex flex-col items-center text-center mb-10">
        <h2 className="text-lg md:text-2xl font-medium leading-[34px] md:leading-[54px] capitalize mt-4">
          Top Picks For You
        </h2>
        <p className="text-[#9f9f9f] text-sm md:text-base leading-6 max-w-2xl">
          Find a bright idea to suit your taste with our great selection of 
          suspension, floor, and table lights.
        </p>
      </div>

      {/* ✅ Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12">
        {topPicks.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image 
              src={item.image} 
              alt={item.description} 
              width={250} 
              height={250} 
              className="object-cover rounded-lg shadow-md"
            />
            <p className="text-gray-700 text-sm md:text-base mt-3">{item.description}</p>
          </div>
        ))}
      </div>

      {/* ✅ View More Button */}
      <div className="w-full text-center mt-8">
        <Link 
          href="/shop" 
          className="pb-2 text-[16px] font-medium border-b-2 border-transparent hover:border-black transition-all"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
