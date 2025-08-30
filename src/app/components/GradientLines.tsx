"use client";

import React, { useEffect, useState } from "react";

interface GradientLinesProps {
  className?: string;
  lineCount?: number;
  lineColor?: string;
  duration?: number; // speed of fall in seconds
}

interface LineData {
  left: string;
  delay: string;
  spread: string;
}

export default function GradientLines({
  className = "absolute inset-0 -z-10",
  lineCount = 6,
  lineColor = "from-blue-500/60 to-transparent",
  duration = 6
}: GradientLinesProps) {
  const [lines, setLines] = useState<LineData[]>([]);

  useEffect(() => {
    // Generate random values only on client
    const generated = Array.from({ length: lineCount }, (_, i) => {
      const randomDelay = -(Math.random() * duration);
      const spread = (Math.random() - 0.5) * 150; // px left/right
      return {
        left: `${10 + i * (80 / lineCount)}%`,
        delay: `${randomDelay}s`,
        spread: `${spread}px`
      };
    });
    setLines(generated);
  }, [lineCount, duration]);

  if (!lines.length) return null; // render nothing on SSR

  return (
    <div className={`${className} pointer-events-none overflow-hidden`}>
      {lines.map((line, i) => (
        <div
          key={i}
          className={`absolute w-[2px] h-[200px] bg-gradient-to-b ${lineColor} animate-fall`}
          style={{
            left: line.left,
            animationDuration: `${duration}s`,
            animationDelay: line.delay,
            ["--spread" as any]: line.spread
          }}
        />
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            top: -200px;
            opacity: 0;
            transform: translateX(0);
          }
          20% {
            opacity: 1;
            transform: translateX(0);
          }
          80% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            top: 100%;
            opacity: 0;
            transform: translateX(var(--spread));
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
