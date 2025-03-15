"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { BsChevronUp } from "react-icons/bs";

const IsScrolled = ({ children }: { children: React.ReactNode }) => {
  const [showScrolled, setShowScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrolled && (
        <Button
          onClick={scrollToTop}
          variant="scroll"
          className="fixed bottom-16 z-[9999] right-10 bg-green-600 text-white p-3 hover:text-green-500 rounded-full"
        >
          <BsChevronUp className="w-6 h-8 text-white font-bold" />
        </Button>
      )}
      {children}
    </div>
  );
};

export default IsScrolled;
