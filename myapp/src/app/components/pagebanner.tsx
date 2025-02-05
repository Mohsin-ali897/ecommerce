import React from "react";
import Image from "next/image";
import AccountBanner from "../assets/accountBanner.png";
import PageIcon from "../assets/shopLogo.png";
import { IoIosArrowForward } from "react-icons/io";

interface MainBannerProps {
  pageName: string;
}

export default function Mainbanner({ pageName }: MainBannerProps) {
  return (
    <div className="relative h-[400px] flex flex-col justify-center items-center text-center">
      {/* Background Image */}
      <Image
        src={AccountBanner}
        alt="Cart banner"
        fill
        className="absolute top-0 left-0 object-cover"
      />

      {/* Content */}
      <Image src={PageIcon} alt="shop icon" className="mb-3 max-w-xs sm:max-w-md" />
      <h1 className="text-4xl font-normal mb-2 text-black">{pageName}</h1>
      <p className="text-lg flex items-center gap-2">
        Home <IoIosArrowForward /> {pageName}
      </p>
    </div>
  );
}
