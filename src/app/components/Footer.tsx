"use client";
import Image from "next/image";
import Link from "next/link";
 
export default function Footer() {
  return (
    <>
      <footer
        className="bg-cover lg:h-[901px] bg-center text-white px-4 sm:px-6 md:px-8 pt-[30px] md:pt-[100px]"
        style={{
          backgroundImage: "url('/bgfotter.png')",
        }}
      >
        <div className="sm:max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left Section */}
          <div className="main text-center md:text-left">
            <Image
              src="/logofooter.png"
              alt="Logo"
              width={144}
              height={42}
              className="mx-auto md:mx-0"
            />
            <p className="mt-4 sm:max-w-[431px] text-sm md:text-base mx-auto md:mx-0">
              The simplest way to tokenize your portfolio. Access real estate,
              art, DeFi strategies, and even tokenized US Treasury bills. No
              complex wallet setup. Accessible in just a few clicks.
            </p>
 
            <div className="mt-4 flex justify-center md:justify-start gap-[15px]">
              <Image
                src="/facebook.svg"
                alt="Illustration"
                width={40}
                height={40}
              />
              <Image
                src="/instagram.svg"
                alt="Illustration"
                width={40}
                height={40}
              />
              <Image
                src="/twitter.svg"
                alt="Illustration"
                width={40}
                height={40}
              />
            </div>
          </div>
 
          {/* Middle Section */}
          <div className="grid grid-cols-2 gap-8 mt-6 md:mt-0 text-center md:text-left">
            <div>
              <h3 className="font-semibold mb-3 text-lg md:text-xl text-left">
                Information
              </h3>
              <ul className="space-y-3 md:space-y-6 text-sm md:text-base text-left">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-collateralize">About Collateralize</Link>
                </li>
                <li>
                  <Link href="/how-it-works">How it Works</Link>
                </li>
                <li>
                  <Link href="/explore-assets">Explore Assets</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg md:text-xl text-left">
                Community
              </h3>
              <ul className="space-y-3 md:space-y-6 text-sm md:text-base text-left">
                <li>
                  <Link
                    href="/telegram"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link
                    href="/discord"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
 
          {/* Right Section */}
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <p className="font-semibold text-sm md:text-xl gap-2.5 flex flex-col md:flex-row items-center justify-center md:justify-start">
              <Image
                src="/qr.svg"
                alt="Illustration"
                width={44}
                height={46}
              />{" "}
              <span>
                Lets make a future
                <br className="hidden lg:block" />
                together with Tokyo
              </span>
            </p>
            <button className="items-center gap-3 sm:gap-4  sm:w-fit font-medium text-sm md:text-lg mt-6 md:mt-8 bg-white text-black py-3 px-6 sm:px-9 rounded-full shadow-[0px_0px_10px_rgba(255,255,255,0.55)] flex justify-center mx-auto md:mx-0">
              Download the app
              <Image
                src="/apple.svg"
                alt="Illustration"
                width={28}
                height={28}
                className="md:w-[34px] md:h-[34px]"
              />
            </button>
          </div>
        </div>
 
        <div className="footer max-w-[1500px] mx-auto py-12 sm:py-16">
          <Image
            src="/TOKYO.svg"
            className="w-full"
            alt="Illustration"
            width={100}
            height={100}
          />
        </div>
      </footer>
 
      {/* Copyright outside footer */}
      <div className="bg-black border-t border-gray-700 text-white text-center py-4">
        <p className="text-xs sm:text-sm">
          Copyright © 2025 Tokyo - All Rights Reserved.
        </p>
      </div>
    </>
  );
}