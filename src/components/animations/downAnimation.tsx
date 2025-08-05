"use client";
import { motion } from "framer-motion";

interface AnimatedBoxProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export const AnimatedBoxDown = ({
  children,
  className,
  duration,
}: AnimatedBoxProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 80, zIndex: 1 }}
      whileInView={{ opacity: 1, y: 0, zIndex: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: duration || 2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
