"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedLineDrawProps {
  svgPath: string;
  className?: string;
}

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export const DrawAnimated = ({ svgPath, className }: AnimatedLineDrawProps) => {
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
      className={className}
    >
      <motion.path
        d={svgPath}
        variants={draw}
        custom={0}
        fill="transparent"
        stroke="#FFD700"
        strokeWidth={2}
      />
    </motion.svg>
  );
};
