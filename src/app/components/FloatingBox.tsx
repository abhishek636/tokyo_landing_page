"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FloatingBoxProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  axis?: "x" | "y";
  position?: string;
  amplitude?: number; // How far the element moves
  className?: string; // Additional classes for styling
}

const FloatingBox: React.FC<FloatingBoxProps> = ({
  children,
  delay = 0,
  duration = 4,
  axis = "y",
  position = "",
  amplitude = 15, // Default movement of 15px
  className = ""
}) => {
  // Create the animation based on axis
  const animate = {
    [axis]: [0, -amplitude, 0]
  };

  return (
    <motion.div
      initial={{ [axis]: 0 }}
      animate={animate}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`inline-block ${position} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingBox;