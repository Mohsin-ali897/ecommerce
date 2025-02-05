import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-white w-[100%]'>
    <div className="container bg-white overflow-x-hidden">
      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start h-auto max-w-7xl mx-auto px-4">
        {/* First Section */}
        <div className="flex justify-center items-center text-sm">
          <p className="font-normal text-[#9F9F9F] text-center md:text-left">
            400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
          </p>
        </div>

        {/* Second Section */}
        <div>
          <ul className="flex flex-col gap-3">
            <li className="text-[#9F9F9F] font-medium">Links</li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shoppage">Shop</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="/shoppage/cartPage/account/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Third Section */}
        <div>
          <ul className="flex flex-col gap-3">
            <li className="text-[#9F9F9F] font-medium">Help</li>
            <li><Link href="/">Payment Options</Link></li>
            <li><Link href="/">Returns</Link></li>
            <li><Link href="/">Privacy Policies</Link></li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div className="flex flex-col justify-start">
          <h3 className="text-[#9F9F9F] font-medium mb-3">Newsletter</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="w-[90%] sm:w-[100px] border-b-2 border-black p-2 flex-grow focus:outline-none text-sm"
            />
            <button className="border-b-2 border-black px-3 py-2 text-sm">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-center sm:justify-start">
        <p className="text-center text-black mt-6 text-xs">
          &copy; 2022 Meubel House. All rights reserved.
        </p>
      </div>
    </div>
    </footer>
  );
}
