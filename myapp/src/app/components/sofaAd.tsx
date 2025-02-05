import React from "react";
import Image from "next/image";
import sofa from "../assets/Asgaard sofa 1.png";

export default function SofaAd() {
  return (
    <div className="h-auto sm:h-[400px] bg-[#fff9e5] flex flex-col sm:flex-row items-center justify-center px-6 sm:px-12 lg:px-20 py-10 sm:py-0">
      {/* Sofa Image */}
      <div className="flex justify-center items-center w-full sm:w-1/2 mb-6 sm:mb-0 lg:h-[200px]">
        <Image
          src={sofa}
          alt="Sofa Set"
          className="w-[60%] sm:w-[60%] md:w-[90%] object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="text-center sm:text-left w-full sm:w-1/2">
        <h2 className="text-[20px] sm:text-[24px] font-semibold mb-2">
          New Arrivals
        </h2>
        <h3 className="font-bold text-[32px] sm:text-[30px] lg:text-[48px] mb-3 sm:mb-6">
          Asgaard Sofa
        </h3>
        <button className="w-[180px] sm:w-[200px] h-[40px] sm:h-[45px] border-2 border-black hover:bg-black hover:text-white transition-all duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
}
