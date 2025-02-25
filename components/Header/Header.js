"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import "../../app/globals.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const isActive = (path) => pathname === path ? "text-[#C088fb]" : "text-white";

  // Toggle the mobile menu
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex justify-between items-center sm:h-[72px] lg:px-[24px] md:px-[24px] sm:px-[24px] z-40">
      <Link href="/" className="font-bold text-2xl text-white">Voyex.</Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex md:flex text-sm font-medium gap-8 py-2 px-[48px] border border-card rounded-[43px]">
        <Link href="/pricing" className={`${isActive("/pricing")} hover:text-[#C088fb]`}>Pricing</Link>
        <Link href="/resources" className={`${isActive("/resources")} hover:text-[#C088fb]`}>Resources</Link>
        <Link href="/about-us" className={`${isActive("/about-us")} hover:text-[#C088fb]`}>About us</Link>
        <Link href="/blog" className={`${isActive("/blog")} hover:text-[#C088fb]`}>Blog</Link>
      </div>

      {/* Go to App Button */}
      <a 
        href="https://voyex-app-dev-delta.vercel.app/" 
        className="sm:hidden lg:flex md:flex bg-[#c088fb] rounded-3xl md:rounded-[27px] border-[1.5px] border-[#c088fb] text-[#0a0a0b] flex gap-2 lg:py-[6px] lg:px-9 md:py-[6px] md:px-9 transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#9b67d7] hover:backdrop-blur-[18.4px]"
      >
        Go to App
      </a>

      {/* Hamburger Menu Button */}
      <button className="md:hidden" onClick={toggleDropdown}>
        <Image src="/menu.svg" alt="menu" width={24} height={24} />
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-8 sm:flex flex-col gap-4 bg-[#0d0d0d] text-white rounded-lg shadow-lg py-4 px-6 z-20">
          <ul className="flex flex-col gap-4">
            <li className={`${isActive("/pricing")} hover:text-[#C088fb]`}>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className={`${isActive("/resources")} hover:text-[#C088fb]`}>
              <Link href="/resources">Resources</Link>
            </li>
            <li className={`${isActive("/about-us")} hover:text-[#C088fb]`}>
              <Link href="/about-us">About us</Link>
            </li>
            <li className={`${isActive("/blog")} hover:text-[#C088fb]`}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <a 
            href="https://voyex-app-dev-delta.vercel.app/" 
            className="bg-[#c088fb] rounded-3xl border-[1.5px] border-[#c088fb] text-sm text-[#0a0a0b] flex gap-2 px-4 py-2 transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#9b67d7] hover:backdrop-blur-[18.4px] justify-start"
          >
            Go to App
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
