"use client";
import { motion } from "framer-motion";

interface AnimatedBoxProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedBoxBreathing = ({
  children,
  className,
  delay,
}: AnimatedBoxProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1 }}
      animate={{
        opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0],
        scale: [1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1],
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay: delay || 0,
      }}
    >
      {children}
    </motion.div>
  );
};
