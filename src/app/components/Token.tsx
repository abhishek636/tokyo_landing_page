// components/TokenizationSection.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
 
const features = [
  {
    title: "Assets Become Tokens",
    description:
      "A $10M asset is transformed into 1 million digital shares, each worth $10.",
    image: "/image 242.svg",
  },
  {
    title: "Trade Fractions",
    description: "Get fractional access without needing millions to start.",
    image: "/bitcoin.svg",
  },
  {
    title: "24/7 Liquid RWAs",
    description:
      "For the first time, illiquid can now be instant and globally tradable in DeFi.",
    image: "/clock.svg",
  },
  {
    title: "Assets Become Tokens",
    description:
      "A $10M asset is transformed into 1 million digital shares, each worth $10.",
    image: "/image 242.svg",
  },
];
 
export default function Token() {
  return (
    <section className="py-16 md:px-auto px-4 ">
      <motion.h2
        className="title text-white text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What is Tokenization?
      </motion.h2>
 
      <div className="grid md:grid-cols-2 grid-rows-2 gap-4 max-w-[1096px] mx-auto ">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="card-wrapper "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card h-full rounded-2xl">
              <div className="card-inner flex flex-col justify-flex-start items-center p-4.5  max-w-[350px] mx-auto">
                <h3 className="text-white text-center card-title typing">{feature.title}</h3>
                <p className="card-desc text-center">{feature.description}</p>
                <div className="icon-wrap">
                  <img src={feature.image} alt={feature.title} className="icon" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
 
      <style jsx>{`
        /* layout */
 
        .card {
          background: linear-gradient(#0b0b0b, #0b0b0b) padding-box,
            linear-gradient(
              90deg,
              #000,
              #fff,
              #000,
              #0e0d0d,
              #141414
            ) border-box;
          border: 1px solid #b1b1b13b;
          background-size: 200% 200%, 300% 300%;
          animation: borderMove 6s linear infinite;
          width: 100%;
          transition: transform 220ms ease;
        }
 
        .card:hover {
          transform: translateY(-6px) scale(1.02);
        }
 
        // .icon-wrap {
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        // }
        .icon {
          width: 220px;
          height: 200px;
          object-fit: contain;
          display: block;
          margin-top: 20px;
          animation: float 3s ease-in-out infinite; /* floating animation */
        }
 
        /* typing animation */
        .card-title.typing {
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0.35rem 0 0.65rem;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          animation: typing 6s steps(30, end) forwards, blink 0.7s step-end infinite;
        }
 
        .card-desc {
          font-size: 0.95rem;
          color: #c9c9c9;
          line-height: 1.4;
          margin: 0;
        }
 
        @media (max-width: 769px) {
          .card-inner {
            padding: 18px 10px;
          }
          .icon {
            width: 180px;
            height: 160px;
          }
        }
 
        @keyframes borderMove {
          0% {
            background-position: 100% 50%, 0% 50%;
          }
          50% {
            background-position: 100% 50%, 100% 50%;
          }
          100% {
            background-position: 100% 50%, 0% 50%;
          }
        }
 
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
 
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
 
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </section>
  );
}