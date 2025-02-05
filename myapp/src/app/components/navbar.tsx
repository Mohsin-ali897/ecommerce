
'use client';

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import ProImg from '../assets/Asgaard sofa 1.png';
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleLinkClick = () => {
    // Close the menu when any link is clicked
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="h-24 w-full flex items-center justify-between px-3 md:px-[100px] bg-transparent">
        {/* Navigation Links */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-lg font-normal transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:items-center md:h-auto md:bg-transparent md:translate-x-0`}
        >
          {/* Close Button for Hamburger Menu */}
          <div className="absolute top-4 right-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-red-500 text-2xl"
            >
              <IoClose />
            </button>
          </div>

          <li>
            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={handleLinkClick}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="#" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Action Icons */}
        <ul className="flex md:flex-row items-center gap-6 md:gap-[40px]">
          <li>
            <Link href="/signout">
              <MdOutlinePersonAddAlt className="text-xl md:text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <IoMdSearch className="text-xl md:text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="#">
              < IoMdHeartEmpty  className="text-xl md:text-2xl font-bold" />
            </Link>
          </li>
          <li>
            <Link href='/cartPage' ><AiOutlineShoppingCart className="text-xl md:text-2xl" /></Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden z-10">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>
    </div>
  );
}
