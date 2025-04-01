// import Link from 'next/link';
// import React from 'react'
// import { Button } from '../ui/button';
// import { Badge, BadgeDollarSignIcon } from 'lucide-react';
// interface CourseProps{
//     imageUrl?: string;
//     heading?: string;
//     description?: string[];
//     learnMore?:  string
// }
// function CourseCategories({imageUrl, heading, description, learnMore}:CourseProps) {
//   return (
//     <div className='shadow-md bg-white dark:bg-gray-900'>
//            <h2>{heading}</h2>
//       <div className="flex items-center">
     
//         <div className="image"></div>
//         <div className="desc">
//             {[description].map((item, index)=>(
//                 <div className="" key={index}>
//                     <BadgeDollarSignIcon />
//                     <span>{item}</span>
//                 </div>
//             ))}
//         </div>
//       </div>
//       <Link href={learnMore || "#"}>
//         <Button>Learn More</Button>
//       </Link>
//     </div>
//   )
// }

// export default CourseCategories


"use client"

// import Link from 'next/link';
// import React from 'react';
// import { Button } from '../ui/button';
// import { BadgeDollarSignIcon, CheckCircle, Clock, Users } from 'lucide-react';
// import { motion } from 'framer-motion';

// interface CourseProps {
//   imageUrl?: string;
//   heading?: string;
//   description?: string[];
//   learnMore?: string;
//   duration?: string;
//   audience?: string;
// }

// function CourseCategories({ imageUrl, heading, description, learnMore, duration, audience }: CourseProps) {
//   return (
//     <motion.div 
//       className="shadow-md bg-white dark:bg-gray-900 border dark:border-yellow-600 rounded-lg p-5 space-y-4"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       {/* Course Image */}
//       {imageUrl && (
//         <div className="w-full h-40 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
//           <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
//         </div>
//       )}

//       {/* Course Title */}
//       <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{heading}</h2>

//       {/* Course Description */}
//       <div className="space-y-2">
//         {description?.map((item, index) => (
//           <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
//             <CheckCircle className="text-green-500 w-5 h-5" />
//             <span>{item}</span>
//           </div>
//         ))}
//       </div>

//       {/* Additional Course Info */}
//       <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
//         <div className="flex items-center gap-2">
//           <Clock className="w-5 h-5 text-blue-500" />
//           <span>{duration || "Self-paced"}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Users className="w-5 h-5 text-purple-500" />
//           <span>{audience || "Beginners & Professionals"}</span>
//         </div>
//       </div>

//       {/* Learn More Button */}
//       <Link href={learnMore || "#"}>
//         <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Learn More</Button>
//       </Link>
//     </motion.div>
//   );
// }

// export default CourseCategories;


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeDollarSignIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface CourseProps {
  imageUrl?: string;
  heading: string;
  description: string[];
  learnMore: string;
}

function CourseCategories({ imageUrl, heading, description, learnMore }: CourseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="shadow-md bg-white dark:bg-gray-900 border dark:border-yellow-600 rounded-lg p-6 space-y-4"
    >
      {imageUrl && (
  <div className="w-40 mx-auto h-40 relative rounded-full overflow-hidden border-4 border-yellow-600">
    <Image 
      src={imageUrl} 
      alt={heading} 
      fill 
      className="object-cover"
    />
  </div>
)}

      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{heading}</h2>

      <div className="space-y-2">
        {description.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <BadgeDollarSignIcon className="text-green-500 w-5 h-5" />
            <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
          </div>
        ))}
      </div>

      <Link href={learnMore}>
        <Button className="w-full mt-4 bg-yellow-700 hover:bg-yellow-800 text-white">
          Learn More
        </Button>
      </Link>
    </motion.div>
  );
}

export default CourseCategories;
