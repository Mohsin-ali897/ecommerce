'use client';
import Img1 from '@/app/assets/blogImage1.png';
import Img2 from '@/app/assets/blogImage2.png';
import Img3 from '@/app/assets/blogImage3.png';
import recentBlogImg1 from '@/app/assets/mainblog1.png'; 
import recentBlogImg2 from '@/app/assets/mainblog2.png'; 
import recentBlogImg3 from '@/app/assets/mainblog3.png'; 
import recentBlogImg4 from '@/app/assets/mainblog4.png'; 
import { FaCalendar, FaUserAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Image from "next/image";
import Mainbanner from '../components/pagebanner';
import Navbar from '../components/navbar';
import Link from 'next/link';
import Offers from '../components/offers';
import Footer from '../components/footer';

export default function Blog() {
  const blogData = [
    {
      id: 1,
      image: Img1,
      Blogname: 'Going all-in with millennial design',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      image: Img2,
      Blogname: 'Exploring new ways of decorating',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 3,
      image: Img3,
      Blogname: 'Handmade pieces that took time to make',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
  ];

  const RecentBlogCard = [
    { intro: 'Exploring new ways of decorating', pic: recentBlogImg1 },
    { intro: 'Handmade pieces that took time to make', pic: recentBlogImg2 },
    { intro: 'Modern home in Milan', pic: recentBlogImg3 },
    { intro: 'Colorful office redesign', pic: recentBlogImg4 },
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <Mainbanner pageName='Blog'></Mainbanner>
      
      {/* Blog Section */}
      <div className="px-4 lg:px-16 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Main Blog Content */}
        <div className="w-full lg:w-2/3">
          {blogData.map((blog) => (
            <div key={blog.id} className="mb-8 group">
              <div className="h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src={blog.image}
                  alt="Blog Image"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 flex items-center gap-6 text-gray-600 text-sm">
                <p>
                  <FaUserAlt className="inline mr-2" />
                  admin
                </p>
                <p>
                  <FaCalendar className="inline mr-2" />
                  14 Oct 2022
                </p>
                <p>
                  <FaTag className="inline mr-2" />
                  Wood
                </p>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-black group-hover:text-blue-600 transition-colors">
                {blog.Blogname}
              </h3>
              <p className="mt-2 text-gray-700">{blog.intro}</p>
              <Link href="#" className="mt-4 pb-2 inline-block text-black border-b-2 border-black">
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          {/* Search */}
          <div className="relative mb-8">
            <input
              type="text"
              className="w-full h-10 pl-4 pr-10 rounded-lg border border-gray-300"
              placeholder="Search..."
            />
            <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, index) => (
              <div key={index} className="flex justify-between py-2 text-gray-600">
                <p>{category}</p>
                <p>{Math.floor(Math.random() * 10)}</p>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
            <div className="space-y-4">
              {RecentBlogCard.map((post, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-lg">
                    <Image
                      src={post.pic}
                      alt="Post Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black hover:text-blue-600">
                      {post.intro}
                    </p>
                    <p className="text-xs text-gray-500">03 Aug 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* <Pagination /> */}
      <Offers />
      <Footer />
    </div>
  );
}
