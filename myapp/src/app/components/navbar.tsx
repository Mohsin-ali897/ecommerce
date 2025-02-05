'use client';

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoMdSearch, IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="h-24 w-full flex items-center justify-between px-4 md:px-[100px] bg-transparent relative">
      {/* Navigation Links (Desktop) */}
      <ul className="hidden md:flex gap-8 text-lg font-normal">
        {["Home", "Shop", "About", "Contact"].map((item, index) => (
          <li key={index}>
            <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-gray-600">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Action Icons */}
      <ul className="flex items-center gap-6 md:gap-[40px]">
        <li>
          <Link href="/signout">
            <MdOutlinePersonAddAlt className="text-xl md:text-2xl hover:text-gray-600" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <IoMdSearch className="text-xl md:text-2xl hover:text-gray-600" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <IoMdHeartEmpty className="text-xl md:text-2xl hover:text-gray-600" />
          </Link>
        </li>
        <li>
          <Link href="/cartPage">
            <AiOutlineShoppingCart className="text-xl md:text-2xl hover:text-gray-600" />
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu (Mobile) */}
      <button onClick={toggleMenu} className="md:hidden text-2xl z-10" aria-label="Toggle Menu">
        {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-lg font-normal transition-transform duration-300 ease-in-out z-20">
          {["Home", "Shop", "About", "Contact"].map((item, index) => (
            <Link key={index} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </Link>
          ))}
          <button onClick={closeMenu} className="absolute top-5 right-5 text-2xl">
            <IoClose />
          </button>
        </div>
      )}
    </nav>
  );
}
