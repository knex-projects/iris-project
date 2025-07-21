"use client";
import { motion } from "framer-motion";

interface AnimatedBoxProps {
  children: React.ReactNode;
  className?: string;
  delayTime?: number;
}

export const AnimatedBoxEnter = ({
  children,
  className,
  delayTime,
}: AnimatedBoxProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0, zIndex: 1 }}
      whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.75, ease: "easeInOut", delay: delayTime }}
    >
      {children}
    </motion.div>
  );
};
