import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";

import blogImg1 from "../assets/blog1.png";
import blogImg2 from "../assets/blog2.png";
import blogImg3 from "../assets/blog3.png";

const blogs = [
  { id: 1, image: blogImg1, title: "Going all-in with millennial design" },
  { id: 2, image: blogImg2, title: "Exploring modern architecture trends" },
  { id: 3, image: blogImg3, title: "Creative workspace inspirations" },
];

export default function Blog() {
  return (
    <div className="bg-white px-6 sm:px-8 md:px-12 py-10">
      {/* Blog Heading */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium capitalize mt-4">
          Our Blogs
        </h2>
        <p className="text-[#9f9f9f] text-sm md:text-base max-w-2xl">
          Find a bright idea to suit your taste with our great selection.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {blogs.map(({ id, image, title }) => (
          <div key={id} className="flex flex-col items-center">
            <Image
              src={image}
              alt={title}
              className="h-[200px] sm:h-[280px] w-[200px] sm:w-[280px] object-cover rounded-md"
            />
            <div className="flex flex-col items-center text-center mt-4">
              <p className="font-normal text-sm md:text-base my-2">{title}</p>
              <Link
                href="#"
                className="font-medium text-[16px] md:text-[20px] border-b-2 border-black pb-2 hover:text-gray-600"
              >
                Read More
              </Link>
              <p className="font-normal text-sm text-gray-500 my-4 flex items-center gap-2">
                <FaRegClock className="text-gray-500" size={16} /> 5 min
                <CiCalendarDate className="text-gray-500" size={20} /> 12
                <sup>th</sup> Oct 2022
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="flex justify-center mt-8">
        <Link
          href="/blog"
          className="font-medium text-[16px] md:text-[20px] hover:border-b-2 hover:border-black hover:pb-2"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}
