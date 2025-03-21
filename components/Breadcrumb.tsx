"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

import {useState, useEffect} from "react"

const generateBubbles = (count: number) =>
    Array.from({ length: count }).map(() => ({
      width: Math.random() * 50 + 20,
      height: Math.random() * 50 + 20,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));


export const Breadcrumb = ({ title, description, imgUrl, link1, link2, linkurl1, linkurl2 , link3, linkurl3}: { title: string; description?: string; imgUrl?: string; link1?: string; link2?: string; linkurl1?: string; linkurl2?: string; link3?: string, linkurl3?: string }) => {
    const [bubbles, setBubbles] = useState<{ width: number; height: number; top: number; left: number; }[]>([]);
    useEffect(() => {
        setBubbles(generateBubbles(10));
      }, []);
    return (
        <div
            className="relative w-full h-[400px] pt-[100px] bg-cover bg-center flex flex-col justify-center items-center text-white dark:text-yellow-200 text-center px-4"
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <motion.div className="absolute inset-0 z-0 flex justify-center items-center">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className="absolute bg-blue-300 dark:bg-blue-700 rounded-full opacity-30"
            style={{
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
            }}
            animate={{
              y: ["0%", "-50%", "0%"],
              x: ["0%", "10%", "-10%", "0%"],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

            <div className="bg-gray-900/60 text-center flex flex-col justify-center items-center p-6 rounded-lg">
                <h1 className="text-4xl font-bold">{title}</h1>
                {description && <p className="mt-2 text-lg max-w-2xl">{description}</p>}
                <div className="mt-4 flex gap-4">
                    {linkurl1 && (
                        <Link href={linkurl1} passHref>
                            <Button className="bg-green-600 text-white hover:bg-blue-700">
                                {link1}
                            </Button>
                        </Link>
                    )}
                    {linkurl2 && (
                        <Link href={linkurl2} passHref>
                            <Button variant='outline' className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white">
                                {link2}
                            </Button>
                        </Link>
                    )}
                    {linkurl3 && (
                        <Link href={linkurl3} passHref>
                            <Button variant='secondary' className="bg-gray-600 text-white hover:bg-gray-700">
                                {link3}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};
