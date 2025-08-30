"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
const NeonBlob = dynamic(() => import("@/app/components/NeonBlob"), { ssr: false });

export default function TokenizationSection() {
  return (
    <section className="relative flex flex-col items-center justify-center pb-20 bg-black text-white overflow-hidden">
      {/* Blob 3D Image */}
      {/* <div className="relative  flex items-center justify-center"> */}
        {/* <Image
          src="/blob.png" // Replace with your 3D blob image path
          alt="3D Blob"
          width={660}
          height={700}
          className="z-10"
        /> */}
        <div className="relative w-full h-[700px] flex items-center justify-center">
        <NeonBlob />

        {/* Floating Badges */}
        <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10">
          <Image src="/eth.png" alt="Bitcoin" width={91} height={91} />
        </div>

        <div className="absolute right-1/3 top-1/2 transform -translate-y-1/2 translate-x-1/2">
          <Image src="/btc.png" alt="Bitcoin" width={91} height={91} />
        </div>

        <div className="absolute right-1/4 left-0 top-2/3 transform -translate-y-1/2 translate-x-1/2 z-10">
          <div className=" bg-white/10 backdrop-blur-xs w-fit px-8 py-4.5 rounded-full text-xl shadow-md">
            24/7 Global Liquidity
          </div>
        </div>

        <div className="absolute bottom-0 left-1/4 transform translate-y-1/2">
          <Image src="/sol1.png" alt="Solana" width={91} height={91} />
        </div>

        {/* <div className="absolute bottom-1/24 right-0 z-10">
          <div className=" bg-white/10 backdrop-blur-xs w-fit px-8 py-4.5 rounded-full text-xl shadow-md">
            Fractional Ownership
          </div>
        </div> */}

        <div className="absolute bottom-1/24 right-1/5 z-10">
          {/* Outer gradient border */}
          <div className="relative px-[1px] py-[1px] rounded-full bg-gradient-to-r from-white/15 to-white/5">
            {/* Inner content → change bg color here */}
            <div className="bg-black/40 backdrop-blur-sm px-8 py-4.5 rounded-full text-xl text-white">
              Institutional-Grade Compliance
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/10 left-1/4 z-10">
          {/* Outer gradient border */}
          <div className="relative px-[1px] py-[1px] rounded-full bg-gradient-to-r from-white/15 to-white/5">
            {/* Inner content → change bg color here */}
            <div className=" backdrop-blur-sm px-8 py-4.5 rounded-full text-xl text-white bg-black/40">
              Fractional Ownership
            </div>
          </div>
        </div>

        {/* <div className="absolute bottom-1/10 left-0 z-10">
          <div className=" bg-white/10 backdrop-blur-xs w-fit px-8 py-4.5 rounded-full text-xl shadow-md">
            Fractional Ownership
          </div>
        </div> */}
      </div>
    </section>
  );
}
