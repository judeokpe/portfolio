"use client";

import { motion } from "framer-motion";


interface ScrollAppearProps {
  children: React.ReactNode;
  className?: string; // Allows custom styling
}

const ScrollAppear: React.FC<ScrollAppearProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className} // Optional: Add custom styles
    >
      {children}
    </motion.div>
  );
};

export default ScrollAppear;
