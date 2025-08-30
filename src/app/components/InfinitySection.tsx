"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import InfinityCanvas from "./InfinityCanvas";
import RayBackground from "./RayBackground";
import LightRayBackground from "./LightRayBackground";

export default function InfinitySection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <RayBackground className="absolute inset-0 z-0" />
      <LightRayBackground/>
      <h1 className="md:text-[100px] text-4xl font-semibold text-center leading-[1.2] z-10 max-w-[972px] md:pt-[175px] pt-12 mx-auto relative">
        Tokenize Real World Assets in One Click
      </h1>
      <div className="relative md:h-[700px] h-[400px]">
        {!isMobile && (
          <>
            <Image
              src="/eth.png"
              alt="Ethereum"
              width={70}
              height={70}
              className="absolute left-[32%] top-[15%] animate-float"
            />
            <Image
              src="/btc.png"
              alt="Bitcoin"
              width={70}
              height={70}
              className="absolute right-[37%] top-[19%] animate-float-delay z-10"
            />
            <Image
              src="/sol.png"
              alt="Solana"
              width={70}
              height={70}
              className="absolute left-[40%] bottom-[36%] animate-float z-10"
            />
            <Image
              src="/sol1.png"
              alt="Solana Variant"
              width={70}
              height={70}
              className="absolute right-[37%] bottom-[35%] animate-float-delay z-10"
            />
          </>
        )}
        
        {/* InfinityCanvas now shows on ALL devices */}
        <InfinityCanvas />
        
        <Image
          src="/phone-mockup.png"
          alt="App Preview"
          fill
          className="object-contain z-0"
        />
      </div>
      
      {/* Removed bg-black class - now shows gradient background */}
      <div className="text-center p-4 relative z-10 md:-mt-[100px] bg-black">
        <button className="px-8 py-3 bg-white text-black rounded-full text-[13px] font-medium mb-3 hover:bg-opacity-90 transition shadow-[0px_4px_74px_0px_#68B7FF59]">
          Download By App
        </button>
        <p className="md:text-[20px] text-base text-white">
          Don't be Late today- Get Early Access Now
        </p>
      </div>
    </section>
  );
}