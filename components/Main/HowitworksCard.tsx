"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
interface CardProps {
    title: string,
    description: string
}
const HowitworksCard = ({ title, description }:CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-2xl p-4 shadow-md w-full bg-white mt-4">
        
      <button
        className="flex justify-between w-full text-left font-semibold text-lg text-yellow-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown  className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="mt-2 text-gray-600">{description}</p>
      </motion.div>
    </div>
  );
};

export default HowitworksCard;
