

// import { CheckSquare2 } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// function WhyUs() {
//   return (
//     <section className="py-12 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
//         {/* Image Section */}
//         <div className="flex-1">
//           <Image
//             src="/bootcamp.png"
//             alt="Coding Bootcamp"
//             width={600}
//             height={400}
//             priority
//             className="w-full max-w-[500px] h-auto object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-lg"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="flex-1">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//             Why Choose Our Bootcamp?
//           </h2>

//           <div className="mt-6 space-y-4">
//             {[
//               "Industry-expert instructors",
//               "Hands-on projects & real-world applications",
//               "Personalized mentorship & career coaching",
//               "Flexible learning (online, hybrid, in-person)",
//               "Certifications recognized by top companies",
//             ].map((item, index) => (
//               <p key={index} className="flex items-center text-lg text-gray-700 dark:text-gray-300">
//                 <CheckSquare2 className="text-green-500 w-6 h-6 mr-2" />
//                 {item}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyUs;


"use client";

import { CheckSquare2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function WhyUs() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Image Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <Image
            src="/bootcamp.png"
            alt="Coding Bootcamp"
            width={600}
            height={400}
            priority
            className="w-full max-w-[500px] h-auto object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Why Choose Our Bootcamp?
          </h2>

          {/* List Items with Staggered Animation */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
            }}
            className="mt-6 space-y-4"
          >
            {[
              "Industry-expert instructors",
              "Hands-on projects & real-world applications",
              "Personalized mentorship & career coaching",
              "Flexible learning (online, hybrid, in-person)",
              "Certifications recognized by top companies",
            ].map((item, index) => (
              <motion.p
                key={index}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center text-lg text-gray-700 dark:text-gray-300"
              >
                <CheckSquare2 className="text-green-500 w-6 h-6 mr-2" />
                {item}
              </motion.p>
            ))}
          </motion.div>

          {/* CTA Button with Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6"
          >
            <a 
              href="/apply" 
              className="inline-block bg-yellow-700 text-white text-lg font-medium px-6 py-3 rounded-md hover:bg-yellow-800 transition duration-300 shadow-md"
            >
              Apply Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;

