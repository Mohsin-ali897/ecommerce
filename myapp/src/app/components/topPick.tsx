import React from "react";
import pic1 from "../assets/topPick1.png";
import pic2 from "../assets/topPick2.png";
import pic3 from "../assets/topPick3.png";
import pic4 from "../assets/topPick4.png";
// import TopPickProductList from "../component/topPickProductList";
import Image from "next/image";
import Link from "next/link";
export default function TopPick() {
  let TopPicker = [
    {
      images: pic1,
      description: "Trenton modular sofa_3",
    },
    {
      images: pic2,
      description: "Granite dining table with dining chair",
    },
    {
      images: pic3,
      description: "Outdoor bar table and stool",
    },
    {
      images: pic4,
      description: "Plain console with teak mirror",
    },
  ];

  return (
    <div className="bg-white px-6 py-12">
      {/* Header Section */}
      <div className="w-full h-auto flex flex-col items-center text-center mb-10">
        <h2 className="text-lg md:text-2xl font-medium leading-[34px] md:leading-[54px] capitalize mt-4">
          Top Picks For You
        </h2>
        <p className="text-[#9f9f9f] text-sm md:text-base leading-6 max-w-2xl">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Product Grid Section */}
      {/* <TopPickProductList/> */}
      
      <div className="h-auto w-full text-center p-[20px]">
        <Link href='/shop' className="pb-2 hover:border-b-black hover:border-b-[2px] text-[16px] font-medium">View More</Link>
      </div>
    </div>
  );
}
