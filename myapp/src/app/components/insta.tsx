import React from 'react'

export default function Insta() {
  return (
    <div className="bg-white flex flex-col h-[300px] justify-center items-center px-4 md:px-8 lg:h-[400px]">
      <h1 className="my-2 font-bold text-[30px] sm:text-[40px] lg:text-[50px] text-center">Our Instagram</h1>
      <p className="text-center text-sm sm:text-base lg:text-lg">Follow our store on Instagram</p>
      <button className="w-[200px] sm:w-[250px] h-[50px] sm:h-[60px] text-center rounded-[50px] my-5 shadow-custom  text-black hover:scale-105 transition-all duration-300">
        Follow Us
      </button>
    </div>
  )
}

