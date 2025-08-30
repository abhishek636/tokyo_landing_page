"use client";

import React from "react";
import Image from "next/image";
import FloatingBox from "./FloatingBox";

export default function FloatingSection() {
  return (
    <section
      className="relative w-full bg-cover bg-top overflow-hidden"
      style={{
        backgroundImage: "url('/Mask group (2).png')",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        {/* Intro */}
        <p className="text-center text-gray-500 max-w-2xl">
          The simplest way to tokenize your portfolio. Access real estate, art,
          DeFi strategies, and even tokenized US Treasury bills. No complex
          wallet setup. Accessible in just a few clicks.
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition">
          Download app Now
          <Image
            src="/qrcircle.png"
            alt="Arrow Right"    
            width={28}  
            height={28}
            className="inline-block ml-2"
          />
        </button>

        {/* Phone Mockups */}
        <div className="relative w-full flex justify-center mt-12">
          <div className="absolute top-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 text-center overflow-auto opacity-[0.08] max-w-[1350px] mx-auto w-full">
            <h2 className="md:text-[80px] text-4xl font-semibold tracking-widest text-black/98 text-wrap ">
              Buy, Sell & send tokenized Assets in seconds.
            </h2>
          </div>
          <FloatingBox
            duration={6}
            delay={0.3}
            amplitude={20} // Custom amplitude
            className="z-10" // Additional classes
          >
            <Image
              src="/image 226.png"
              alt="Phone left"
              width={500}   // required in Next.js Image
              height={500}  // adjust according to actual image aspect ratio
              className="w-[250px] md:w-[500px] md:-mr-16 -mr-2 drop-shadow-2xl"
            />
          </FloatingBox>
          <FloatingBox
            duration={7}
            delay={0.6}
            amplitude={25} // Different amplitude
            className="z-20" // Additional classes
          >
            <Image
              src="/image 227.png"
              alt="Phone right"
              width={500} // required in Next.js Image
              height={500} // adjust based on your actual image aspect ratio
              className="w-[250px] md:w-[500px] md:-ml-14 -ml-2 drop-shadow-2xl"
            />
          </FloatingBox>
        </div>

        {/* 3-Column Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 w-full">
          {/* Left Column */}
          <div>
            <div className="space-y-4 mb-5 rounded-2xl shadow p-6">
              <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-2">
                <Image src="/icon.svg" alt="Bitcoin" width={50} height={50} />
                <span className="text-gray-800">Enabling assets liquidity</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-2">
                <Image src="/icon2.svg" alt="Bitcoin" width={50} height={50} />
                <span className="text-gray-800">Reducing entry barriers</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-2">
                <Image src="/icon3.svg" alt="Bitcoin" width={50} height={50} />
                <span className="text-gray-800">Reducing entry barriers</span>
              </div>
            </div>
            <h4 className="text-black font-bold mb-3">
              Democratizing Access to<br className="md:block hidden" /> Global Assets.
            </h4>
            <p className="text-[#676767] text-sm">
              We believe that the future of finance lies in transparency,
              accessibility, and decentralization. We have made DeFi and RWAs
              accessible.
            </p>
          </div>

          {/* Middle Column (Y floating) */}
          <div>
            <div className="space-y-4 mb-5 rounded-2xl shadow p-6 flex flex-col">
              <FloatingBox duration={5} delay={0.2} axis="y" amplitude={10}>
                <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-700">Generate Profit</p>
                    <p className="text-sm text-gray-500">01/02/2025</p>
                  </div>
                  <p className="font-bold text-green-600">+ $15.08</p>
                </div>
              </FloatingBox>
              <FloatingBox duration={6} delay={0.5} axis="y" amplitude={12}>
                <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-700">Generate Profit</p>
                    <p className="text-sm text-gray-500">01/02/2025</p>
                  </div>
                  <p className="font-bold text-green-600">+ $15.08</p>
                </div>
              </FloatingBox>
              <FloatingBox duration={7} delay={0.7} axis="y" amplitude={8}>
                <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-700">Generate Profit</p>
                    <p className="text-sm text-gray-500">01/02/2025</p>
                  </div>
                  <p className="font-bold text-green-600">+ $15.08</p>
                </div>
              </FloatingBox>
            </div>
            <h4 className="text-black font-bold mb-3">
              Tokenized assets now accessible<br className="md:block hidden" /> with cards or crypto.
            </h4>
            <p className="text-[#676767] text-sm">
              Say goodbye to the hassle of setting up wallets and navigating
              protocols. We have made DeFi and RWAs accessible in just a few
              clicks.
            </p>
          </div>

          {/* Right Column (X floating) */}
          <div>
            <div className="space-y-4 mb-5 rounded-2xl shadow p-6 flex flex-col">
              <FloatingBox duration={5} delay={0.2} axis="x" amplitude={10}>
                <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-700">Generate Profit</p>
                    <p className="text-sm text-gray-500">01/02/2025</p>
                  </div>
                  <p className="font-bold text-green-600">+ $15.08</p>
                </div>
              </FloatingBox>
              <FloatingBox duration={6} delay={0.5} axis="x" amplitude={15}>
                <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-700">Generate Profit</p>
                    <p className="text-sm text-gray-500">01/02/2025</p>
                  </div>
                  <p className="font-bold text-green-600">+ $15.08</p>
                </div>
              </FloatingBox>
              <FloatingBox duration={5} delay={0.8} axis="x" amplitude={12}>
                <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                  <div>
                    <p className="text-gray-700">Generate Profit</p>
                    <p className="text-sm text-gray-500">01/02/2025</p>
                  </div>
                  <p className="font-bold text-green-600">+ $15.08</p>
                </div>
              </FloatingBox>
            </div>
            <h4 className="text-black font-bold mb-3">
              Tokenized assets now accessible<br className="md:block hidden" /> with cards or crypto.
            </h4>
            <p className="text-[#676767] text-sm">
              Say goodbye to the hassle of setting up wallets and navigating
              protocols. We have made DeFi and RWAs accessible in just a few
              clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}