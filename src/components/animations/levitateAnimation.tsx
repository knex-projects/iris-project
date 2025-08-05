"use client";
import { motion } from "framer-motion";

interface AnimatedBoxProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down";
}

export const AnimatedBoxLevitating = ({
  children,
  className,
  delay,
  direction,
}: AnimatedBoxProps) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: [
          0,
          direction === "down" ? 10 : -10,
          0,
          direction === "down" ? 10 : -10,
          0,
        ],
      }}
      transition={{
        duration: 7,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        delay: delay || 0,
      }}
    >
      {children}
    </motion.div>
  );
};
