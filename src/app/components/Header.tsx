"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 fixed z-50 top-6">
      {/* Main header container with gradient border */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between rounded-full p-[1px] bg-gradient-to-r from-white via-transparent to-white">
        {/* Inner container with glassmorphism effect */}
        <div className="flex items-center justify-between w-full rounded-full bg-gradient-to-r from-[#B1ABAB0A] to-[#A3A0A00A] backdrop-blur-[100px] px-6 py-3 md:px-10 md:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logofooter.png"
              alt="Tokyo Logo"
              width={120}
              height={40}
              className="w-[100px] md:w-[140px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 font-medium">
            <Link
              href="/"
              className="hover:underline hover:text-white transition text-white"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="hover:underline hover:text-white transition text-white"
            >
              Explore Assets
            </Link>
            <Link
              href="/how-it-works"
              className="hover:underline hover:text-white transition text-white"
            >
              How It Works
            </Link>
          </nav>

          {/* CTA Button (Desktop only) */}
          <button className="hidden md:flex items-center bg-black text-white py-2 px-5 rounded-full hover:opacity-90 transition text-sm md:text-base">
            Get the App
            <Image
              src="/app.svg"
              alt="App Icon"
              width={34}
              height={34}
              className="sm:ml-6 ml-2"
            />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-black text-white p-2 rounded-full"
          >
            {isOpen ? (
              // Close Icon
              <svg
                fill="#ffffffff"
                width="25px"
                height="25px"
                viewBox="-3.5 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
                className="cf-icon-svg"
              >
                <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                fill="#fff"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="25px"
                height="25px"
                viewBox="0 0 20 20"
                enableBackground="new 0 0 20 20"
                xmlSpace="preserve"
              >
                <path d="M19,5H1C0.4,5,0,4.6,0,4s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,5,19,5z" />
                <path d="M10,11H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h9c0.6,0,1,0.4,1,1S10.6,11,10,11z" />
                <path d="M19,17H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,17,19,17z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with glass effect */}
      {isOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-gradient-to-r from-[#B1ABAB0A] to-[#A3A0A00A] backdrop-blur-[100px] p-4 space-y-4 text-left border border-white/10">
          <Link
            href="/"
            className="block text-white hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="block text-white hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Explore Assets
          </Link>
          <Link
            href="/how-it-works"
            className="block text-white hover:underline"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <button className="w-fit bg-black text-white py-2 px-5 rounded-full hover:opacity-90 transition flex items-center">
            Get the App
            <Image
              src="/app.svg"
              alt="App Icon"
              width={24}
              height={24}
              className="sm:ml-6 ml-2"
            />
          </button>
        </div>
      )}
    </header>
  );
}