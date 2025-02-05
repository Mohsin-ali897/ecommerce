import React from 'react'
import Image from "next/image";
import AccountBanner from '../assets/accountBanner.png'
import PageIcon from '../assets/shopLogo.png'
import { IoIosArrowForward } from 'react-icons/io';
export default function Mainbanner({pageName}: {pageName: string}) {
  return (
    <div>
        <div className="relative h-[400px] flex justify-center items-center flex-col">
        <Image
          src={AccountBanner}
          alt="Cart banner"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
        <Image src={PageIcon} alt="shop icon" className="m-0" />
        <h1 className="text-4xl font-normal mb-2 text-black">{pageName}</h1>
        <p className="text-[20px]">
          Home <IoIosArrowForward className="inline" /> {pageName}
        </p>
      </div>
    </div>
  )
}
