import React from "react";

export default function Offers() {
  const offers = [
    {
      title: "Free Delivery",
      description: "For all orders over $50, consectetur adipiscing elit.",
    },
    {
      title: "90 Days Return",
      description: "If goods have problems, consectetur adipiscing elit.",
    },
    {
      title: "Secure Payment",
      description: "100% secure payment, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="w-full bg-[#f2eeee] flex flex-col md:flex-row justify-between items-center gap-6 py-8 px-6">
      {offers.map((offer, index) => (
        <div key={index} className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-medium text-[22px] md:text-[28px] lg:text-[34px] my-2">
            {offer.title}
          </h2>
          <p className="font-light text-sm md:text-base">{offer.description}</p>
        </div>
      ))}
    </div>
  );
}
