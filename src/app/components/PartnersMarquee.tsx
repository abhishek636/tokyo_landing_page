"use client";

import Image from "next/image";

interface Partner {
  id: number;
  logo: string;
  alt: string;
}

const partners: Partner[] = [
  { id: 1, logo: "/sliderimage/microsoft.png", alt: "Partner 1 Logo" },
  { id: 2, logo: "/sliderimage/Deloitte-Logo-PNG-Photo 1.svg", alt: "Partner 2 Logo" },
  { id: 3, logo: "/sliderimage/Ondo.svg", alt: "Partner 3 Logo" },
  { id: 4, logo: "/sliderimage/toppng.png", alt: "Partner 4 Logo" },
  { id: 5, logo: "/sliderimage/Midas.png", alt: "Partner 5 Logo" },
  { id: 6, logo: "/sliderimage/toppng.png", alt: "Partner 6 Logo" },
];

// Duplicate partners for seamless infinite loop
const duplicatedPartners = [...partners, ...partners];

export default function PartnersMarquee() {
  return (
    <section className=" py-16 w-full">
      <div
        className="mx-auto my-0 px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 pb-16 sm:pb-20 bg-cover bg-center relative max-w-[95%] rounded-[40px]"
        style={{ backgroundImage: "url('/Mask group.png')", }} >

        <h2 className="text-[50px] font-bold text-gray-900 text-center max-w-[629px] mx-auto">
          Helping teams at the world best Companies
        </h2>

        <div className="relative">

          <div className="flex overflow-hidden pt-20">

            <div className="flex animate-marquee whitespace-nowrap">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 px-8"
                >
                  <div className="min-w-[200px]">
                    <div className="relative h-16 w-full mb-3">
                      <Image
                        src={partner.logo}
                        alt={partner.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
       
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
       
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

