import React from "react";

export default function Insta() {
  return (
    <div className="bg-white flex flex-col justify-center items-center h-[300px] lg:h-[400px] px-4 md:px-8">
      <h1 className="font-bold text-[30px] sm:text-[40px] lg:text-[50px] text-center my-2">
        Our Instagram
      </h1>
      <p className="text-center text-sm sm:text-base lg:text-lg text-gray-600">
        Follow our store on Instagram
      </p>
      <button className="w-[200px] sm:w-[250px] h-[50px] sm:h-[60px] rounded-full my-5 shadow-md text-black font-medium hover:scale-105 transition-transform duration-300">
        Follow Us
      </button>
    </div>
  );
}
