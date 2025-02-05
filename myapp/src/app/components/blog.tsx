import React from "react";
import Image from "next/image";
import blogImg1 from "../assets/blog1.png";
import blogImg2 from "../assets/blog2.png";
import blogImg3 from "../assets/blog3.png";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";

export default function Blog() {
  let Blog = [
    {
      id: 1,
      image: blogImg1,
    },
    {
      id: 2,
      image: blogImg2,
    },
    {
      id: 3,
      image: blogImg3,
    },
  ];

  return (
    <div className="bg-white px-6 sm:px-8 md:px-12 py-10">
      {/* Blog Heading */}
      <div className="w-full flex flex-col items-center text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium leading-[34px] md:leading-[54px] capitalize mt-4">
          Our Blogs
        </h2>
        <p className="text-[#9f9f9f] text-sm md:text-base leading-6 max-w-2xl">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {Blog.map((elm, ind) => (
          <div key={ind} className="flex flex-col items-center">
            {/* Blog Image */}
            <Image
              src={elm.image}
              alt="Blog_Img"
              className="h-[200px] sm:h-[280px] w-[200px] sm:w-[280px] object-cover rounded-md"
            />
            {/* Blog Content */}
            <div className="flex flex-col items-center text-center mt-4">
              <p className="font-normal text-sm md:text-base my-2">
                Going all-in with millennial design
              </p>
              <Link
                href="#"
                className="text-center font-medium text-[16px] md:text-[20px] leading-5 border-b-2 border-b-black pb-2 hover:text-gray-600"
              >
                Read More
              </Link>
              <p className="font-normal text-sm tracking-wide text-center my-4 leading-4 text-gray-500">
                <FaRegClock className="inline mr-1" fontSize="16" /> 5 min
                <CiCalendarDate className="inline mx-1" fontSize="20" /> 12
                <sup>th</sup> Oct 2022
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="flex justify-center items-center w-full h-auto mt-8">
        <Link
          href="/blog"
          className="text-center font-medium text-[16px] md:text-[20px] leading-5 hover:border-b-2 hover:border-b-black hover:pb-2"
        >
          View All Post
        </Link>
      </div>
    </div>
  );
}
