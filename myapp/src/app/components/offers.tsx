import React from 'react'

export default function Offers() {
  return (
    
         <div className="w-full bg-[#f2eeee] flex flex-col md:flex-row justify-between items-center gap-2 py-8 px-6">
  {/* Free Delivery */}
  <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center">
    <h2 className="font-medium text-[22px] md:text-[28px] lg:text-[34px] my-2 text-center md:text-left">
      Free Delivery
    </h2>
    <p className="font-light text-sm md:text-base text-center md:text-left">
      For all orders over $50, consectetur adipiscing elit.
    </p>
  </div>

  {/* 90 Days Return */}
  <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center">
    <h2 className="font-medium text-[22px] md:text-[28px] lg:text-[34px] my-2 text-center md:text-left">
      90 Days Return
    </h2>
    <p className="font-light text-sm md:text-base text-center md:text-left">
      If goods have problems, consectetur adipiscing elit.
    </p>
  </div>

  {/* Secure Payment */}
  <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center">
    <h2 className="font-medium text-[22px] md:text-[28px] lg:text-[34px] my-2 text-center md:text-left">
      Secure Payment
    </h2>
    <p className="font-light text-sm md:text-base text-center md:text-left">
      100% secure payment, consectetur adipiscing elit.
    </p>
  </div>
</div>
    
  )
}
