"use client";
import { motion } from "framer-motion";

interface AnimatedBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBoxRight = ({ children, className }: AnimatedBoxProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -80, zIndex: 1 }}
      whileInView={{ opacity: 1, x: 0, zIndex: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
