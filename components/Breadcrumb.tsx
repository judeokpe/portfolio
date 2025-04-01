

// "use client";

// import Link from "next/link";
// import { Button } from "./ui/button";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const generateBubbles = (count: number) =>
//   Array.from({ length: count }).map(() => ({
//     width: Math.random() * 50 + 20,
//     height: Math.random() * 50 + 20,
//     top: Math.random() * 100,
//     left: Math.random() * 100,
//   }));

// export const Breadcrumb = ({
//   title,
//   description,
//   imgUrl,
//   videoUrl,
//   link1,
//   link2,
//   linkurl1,
//   linkurl2,
//   link3,
//   linkurl3,
// }: {
//   title: string;
//   description?: string;
//   imgUrl?: string;
//   videoUrl?: string;
//   link1?: string;
//   link2?: string;
//   linkurl1?: string;
//   linkurl2?: string;
//   link3?: string;
//   linkurl3?: string;
// }) => {
//   const [bubbles, setBubbles] = useState<
//     { width: number; height: number; top: number; left: number }[]
//   >([]);

//   useEffect(() => {
//     setBubbles(generateBubbles(10));
//   }, []);

//   return (
//     <div className="relative w-full md:h-[400px] h-[400px] md:pt-[100px] pt-[200px] flex flex-col justify-center items-center text-white dark:text-yellow-200 text-center px-4">
//       {/* Background Video or Image */}
//       {videoUrl ? (
//         <video
//           className="absolute inset-0 w-full overflow-x-hidden h-[400px] object-cover"
//           src={videoUrl}
//           autoPlay
//           loop
//           muted
//         />
//       ) : (
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${imgUrl})` }}
//         />
//       )}

//       {/* Bubble Animation */}
//       <motion.div className="absolute inset-0 z-0 flex justify-center items-center">
//         {bubbles.map((bubble, index) => (
//           <motion.div
//             key={index}
//             className="absolute bg-blue-300 dark:bg-blue-700 rounded-full opacity-30"
//             style={{
//               width: `${bubble.width}px`,
//               height: `${bubble.height}px`,
//               top: `${bubble.top}%`,
//               left: `${bubble.left}%`,
//             }}
//             animate={{
//               y: ["0%", "-50%", "0%"],
//               x: ["0%", "10%", "-10%", "0%"],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: Math.random() * 5 + 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </motion.div>

//       {/* Content Box */}
      
//       <div className="relative z-10 bg-gray-900/60 text-center -mt-64 flex flex-col justify-center items-center p-6 rounded-lg">
//         <h1 className="text-4xl font-bold">{title}</h1>
//         {description && <p className="mt-2 text-lg max-w-2xl">{description}</p>}
//         <div className="mt-4 flex flex-col md:flex-row gap-4">
//           {linkurl1 && (
//             <Link href={linkurl1} passHref>
//               <Button >
//                 {link1}
//               </Button>
//             </Link>
//           )}
//           {linkurl2 && (
//             <Link href={linkurl2} passHref>
//               <Button variant="secondary" >
//                 {link2}
//               </Button>
//             </Link>
//           )}
//           {linkurl3 && (
//             <Link href={linkurl3} passHref>
//               <Button variant="tertiary" >
//                 {link3}
//               </Button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const generateBubbles = (count: number) =>
  Array.from({ length: count }).map(() => ({
    width: Math.random() * 50 + 20,
    height: Math.random() * 50 + 20,
    top: Math.random() * 100,
    left: Math.random() * 100,
  }));

export const Breadcrumb = ({
  title,
  description,
  imgUrl,
  videoUrl,
  link1,
  link2,
  linkurl1,
  linkurl2,
  link3,
  linkurl3,
}: {
  title: string;
  description?: string;
  imgUrl?: string;
  videoUrl?: string;
  link1?: string;
  link2?: string;
  linkurl1?: string;
  linkurl2?: string;
  link3?: string;
  linkurl3?: string;
}) => {
  const [bubbles, setBubbles] = useState<
    { width: number; height: number; top: number; left: number }[]
  >([]);

  useEffect(() => {
    setBubbles(generateBubbles(10));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative w-full md:h-[400px] h-[400px] md:pt-[100px] pt-[200px] flex flex-col justify-center items-center text-white dark:text-yellow-200 text-center px-4"
    >
      {/* Background Video or Image */}
      {videoUrl ? (
        <video
          className="absolute inset-0 w-full overflow-x-hidden h-[400px] object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      )}

      {/* Bubble Animation */}
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

      {/* Content Box */}
      <div className="relative z-10 bg-gray-900/60 text-center -mt-64 flex flex-col justify-center items-center p-6 rounded-lg">
        <h1 className="text-4xl font-bold">{title}</h1>
        {description && <p className="mt-2 text-lg max-w-2xl">{description}</p>}
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          {linkurl1 && (
            <Link href={linkurl1} passHref>
              <Button>{link1}</Button>
            </Link>
          )}
          {linkurl2 && (
            <Link href={linkurl2} passHref>
              <Button variant="secondary">{link2}</Button>
            </Link>
          )}
          {linkurl3 && (
            <Link href={linkurl3} passHref>
              <Button variant="tertiary">{link3}</Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

