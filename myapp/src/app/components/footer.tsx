import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white w-full py-6">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address Section */}
          <div className="text-sm text-center sm:text-left text-gray-500">
            <p>
              400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-gray-500 font-medium mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shoppage">Shop</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="/shoppage/cartPage/account/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-gray-500 font-medium mb-3">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Payment Options</Link></li>
              <li><Link href="/">Returns</Link></li>
              <li><Link href="/">Privacy Policies</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-gray-500 font-medium mb-3">Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full sm:w-auto border-b-2 border-black p-2 text-sm focus:outline-none placeholder-gray-400"
              />
              <button className="border-b-2 border-black px-3 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center sm:text-left mt-6 text-xs text-black">
          &copy; 2022 Meubel House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
