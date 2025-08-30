"use client";

import React from "react";

interface RayBackgroundProps {
  className?: string; // Wrapper classes
  style?: React.CSSProperties;
  circleCount?: number; // Number of circles
  circleSpacing?: number; // Gap between circles
  circleBaseSize?: number; // First circle size
  circleBorders?: string[]; // Border colors for circles
  circleBackgrounds?: string[]; // Background colors for circles
  circlePositionClass?: string; // Position of each circle (from parent)
}

export default function RayBackground({
  className = "absolute inset-0 -z-10",
  style,
  circleCount = 5,
  circleSpacing = 180,
  circleBaseSize = 150,
  circleBorders = [],
  circleBackgrounds = [],
  circlePositionClass = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
}: RayBackgroundProps) {
  return (
    <div className={`${className} bg-black overflow-hidden`} style={style}>
      {[...Array(circleCount)].map((_, i) => {
        const border =
          circleBorders[i] || circleBorders[circleBorders.length - 1] || "border-white/5";
        const bg =
          circleBackgrounds[i] ||
          circleBackgrounds[circleBackgrounds.length - 1] ||
          "bg-transparent";

        return (
          <div
            key={i}
            className={`${circlePositionClass} rounded-full border ${border} ${bg}`}
            style={{
              width: `${circleBaseSize + i * circleSpacing}px`,
              height: `${circleBaseSize + i * circleSpacing}px`,
            }}
          />
        );
      })}
    </div>
  );
}
